import { useState, useEffect } from 'react';
import { mockData } from '../data/mockData';

// URL base de la API
const API_BASE_URL = 'https://mecafe-production.up.railway.app';

/**
 * Hook personalizado para manejar llamadas a API con fallback a datos mockup
 * @param {string} endpoint - El endpoint de la API a llamar
 * @param {string} mockKey - La clave de los datos mockup a usar como fallback
 * @param {number} timeout - Tiempo máximo de espera en ms (default: 1500ms)
 * @param {boolean} instantMode - Si es true, carga mockup primero y reemplaza con datos reales si llegan rápido
 * @returns {Object} - { data, loading, error, isUsingMock }
 */
export const useApiWithFallback = (endpoint, mockKey, timeout = 1500, instantMode = true) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isUsingMock, setIsUsingMock] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const mockResult = mockData[mockKey];

        // Modo instantáneo: mostrar datos mockup inmediatamente
        if (instantMode && mockResult) {
          setData(mockResult);
          setIsUsingMock(true);
          setLoading(false); // Carga "instantánea" completada
        }

        // Crear un AbortController para el timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
          signal: controller.signal,
          // Agregar headers para optimizar la respuesta
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        // Verificar si los datos son válidos (no vacíos, no null)
        if (result === null || result === undefined ||
            (Array.isArray(result) && result.length === 0) ||
            (typeof result === 'object' && Object.keys(result).length === 0)) {
          throw new Error('Empty or invalid response from API');
        }

        // Reemplazar mockup con datos reales si llegaron a tiempo
        setData(result);
        setIsUsingMock(false);
        setError(null);
      } catch (err) {
        // Si el error fue por timeout, mostrar mensaje específico
        const errorMessage = err.name === 'AbortError'
          ? `Request timeout after ${timeout}ms`
          : err.message;

        console.warn(`API call failed for ${endpoint}, using mock data. Error:`, errorMessage);

        // Si no estamos en modo instantáneo o no teníamos mockup, usar fallback
        if (!instantMode || !data) {
          const mockResult = mockData[mockKey];
          if (mockResult) {
            setData(mockResult);
            setIsUsingMock(true);
            setError(null);
          } else {
            setError(err);
            setIsUsingMock(false);
          }
        }
      } finally {
        if (!instantMode || !data) {
          setLoading(false);
        }
      }
    };

    if (endpoint && mockKey) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint, mockKey, timeout, instantMode]);

  return { data, loading, error, isUsingMock };
};