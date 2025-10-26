import React from "react"
import CardGrinding from "./CardGrinding"
import CardTotals from "./CardTotals"
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { AiOutlineUser, AiOutlineUserAdd } from "react-icons/ai";
import { useApiWithFallback } from "../hooks/useApiWithFallback";
import "./Dashboard.css";

function Dashboard() {
    // Modo instantáneo: carga datos mockup inmediatamente y los reemplaza si la API responde rápido
    const timeout = 1000; // 1 segundo para máxima velocidad
    const instantMode = true;

    const { data: totalProductsTypeGrinding, loading: loadingGrinding, isUsingMock: mockGrinding } = useApiWithFallback('/api/totalProductsTypeGrinding', 'totalProductsTypeGrinding', timeout, instantMode);
    const { loading: loadingGrames, isUsingMock: mockGrames } = useApiWithFallback('/api/totalProductGrames', 'totalProductGrames', timeout, instantMode);
    const { data: totalProducts, loading: loadingProducts, isUsingMock: mockProducts } = useApiWithFallback('/api/totalProducts', 'totalProducts', timeout, instantMode);
    const { data: totalUsers, loading: loadingUsers, isUsingMock: mockUsers } = useApiWithFallback('/api/totalUsers', 'totalUsers', timeout, instantMode);
    const { data: totalRolesUser, loading: loadingRoles, isUsingMock: mockRoles } = useApiWithFallback('/api/totalRolesUser', 'totalRolesUser', timeout, instantMode);
    const { data: lastProductCreated, loading: loadingLastProduct, isUsingMock: mockLastProduct } = useApiWithFallback('/api/lastProductCreated', 'lastProductCreated', timeout, instantMode);
    const { data: lastUserCreated, loading: loadingLastUser, isUsingMock: mockLastUser } = useApiWithFallback('/api/lastUserCreated', 'lastUserCreated', timeout, instantMode);

    // Estado general de carga
    const isLoading = loadingGrinding || loadingGrames || loadingProducts || loadingUsers || loadingRoles || loadingLastProduct || loadingLastUser;

    // Indicador visual de si estamos usando datos mockup
    const isUsingAnyMock = mockGrinding || mockGrames || mockProducts || mockUsers || mockRoles || mockLastProduct || mockLastUser;

    // Convertir objetos individuales a arrays para el mapeo
    const lastProductArray = lastProductCreated ? [lastProductCreated] : [];
    const lastUserArray = lastUserCreated ? [lastUserCreated] : [];

    // Mostrar indicador de carga minimalista
    if (isLoading) {
        return (
            <div className="containerCenterWeb">
                <div className="generalFormat dashboard__loading">
                    <div className="dashboard__loading-icon">⚡</div>
                    <h2 className="dashboard__loading-title">Cargando dashboard...</h2>
                    <p className="dashboard__loading-text">Obteniendo datos en tiempo récord ⏱️</p>
                </div>
            </div>
        );
    }

    return (
        <div className="containerCenterWeb">
            <div className="generalFormat">
                {/* Indicador compacto de datos mockup */}
                {isUsingAnyMock && (
                    <div className="dashboard__mock-indicator">
                        <span className="dashboard__mock-indicator-icon">⚠️</span>
                        <span className="dashboard__mock-indicator-text">Modo Demostración: datos de ejemplo</span>
                    </div>
                )}

                {/* Layout principal estructurado */}
                <div className="dashboard__layout">
                    {/* Tarjetas principales - Siempre arriba */}
                    <div className="dashboard__cards-section">
                        <div className="dashboard__card-grid">
                            <CardTotals
                                title="Total de Productos"
                                quantity={totalProducts.totalProductsActives}
                                icon={<MdOutlineProductionQuantityLimits className="cardIcon"/>}
                                cardClass="dashboard_card--success"
                            />

                            <CardTotals
                                title="Total de Usuarios"
                                quantity={totalUsers.totalUsers}
                                icon={<AiOutlineUser className="cardIcon"/>}
                                cardClass="dashboard_card--info"
                            />

                            <CardTotals
                                title="Total Roles de Usuario"
                                quantity={totalRolesUser.totalRoles}
                                icon={<AiOutlineUserAdd className="cardIcon"/>}
                                cardClass="dashboard_card--warning"
                            />
                        </div>
                    </div>

                    {/* Contenido principal - Molienda derecha, detalles izquierda */}
                    <div className="dashboard__main-content">
                        {/* Columna izquierda - Detalles */}
                        <div className="dashboard__left-content">
                            {/* Último Producto */}
                            {lastProductArray.map((elementoGeneral, index) => {
                                const rutaImagenProducto = `https://mecafe-production.up.railway.app/img/productos/${elementoGeneral.images_products[0].path}`;

                                return (
                                    <div key={index} className="dashboard__product-card">
                                        <div className="dashboard__product-header">
                                            <h6 className="dashboard__product-title">{elementoGeneral.name}</h6>
                                        </div>

                                        <div className="dashboard__product-content">
                                            <div className="dashboard__product-image">
                                                <img src={rutaImagenProducto} alt={elementoGeneral.name} />
                                            </div>

                                            <div className="dashboard__product-info">
                                                <div className="dashboard__product-description">
                                                    <p>{elementoGeneral.description}</p>
                                                </div>

                                                <div className="dashboard__product-specs">
                                                    <div className="dashboard__spec-group">
                                                        <span className="dashboard__spec-label">Gramos:</span>
                                                        <div className="dashboard__spec-items">
                                                            {elementoGeneral.products_grames.map((element, idx) => (
                                                                <span key={idx} className="dashboard__spec-tag">{element.grames}g</span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className="dashboard__spec-group">
                                                        <span className="dashboard__spec-label">Moliendas:</span>
                                                        <div className="dashboard__spec-items">
                                                            {elementoGeneral.type_grindings.map((element, idx) => (
                                                                <span key={idx} className="dashboard__spec-tag dashboard__spec-tag--accent">{element.name}</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                            {/* Último Usuario */}
                            {lastUserArray.map((elementoGeneral, index) => {
                                const rutaImagen = `https://mecafe-production.up.railway.app/img/profiles/${elementoGeneral.image}`;
                                let directionDefault = {};

                                elementoGeneral.directions.forEach(elemento => {
                                    if (elemento.default) {
                                        directionDefault = elemento;
                                    }
                                });

                                return (
                                    <div key={index} className="dashboard__user-card">
                                        <div className="dashboard__user-header">
                                            <h6 className="dashboard__user-title">Último Usuario Registrado</h6>
                                        </div>

                                        <div className="dashboard__user-content">
                                            <div className="dashboard__user-image">
                                                <img src={rutaImagen} alt={`${elementoGeneral.firstName} ${elementoGeneral.lastName}`} />
                                            </div>

                                            <div className="dashboard__user-info">
                                                <div className="dashboard__user-name">
                                                    <span className="dashboard__user-first">{elementoGeneral.firstName}</span>
                                                    <span className="dashboard__user-last">{elementoGeneral.lastName}</span>
                                                </div>

                                                <div className="dashboard__user-details">
                                                    <div className="dashboard__user-detail">
                                                        <span className="dashboard__detail-label">Email:</span>
                                                        <span className="dashboard__detail-value">{elementoGeneral.email}</span>
                                                    </div>

                                                    <div className="dashboard__user-detail">
                                                        <span className="dashboard__detail-label">Rol:</span>
                                                        <span className="dashboard__detail-value dashboard__detail-value--role">{elementoGeneral.roles.name}</span>
                                                    </div>

                                                    <div className="dashboard__user-detail">
                                                        <span className="dashboard__detail-label">Ubicación:</span>
                                                        <span className="dashboard__detail-value">
                                                            {directionDefault.city ? `${directionDefault.city}, ${directionDefault.country}` : "Sin asignar"}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Columna derecha - Tipos de Molienda */}
                        <div className="dashboard__right-content">
                            <div className="dashboard__grinding-section">
                                <div className="dashboard__section-header">
                                    <h6 className="dashboard__section-title">Productos por Tipos de Molienda</h6>
                                </div>
                                <div className="productsGrinding__grid">
                                    {totalProductsTypeGrinding.map((elemento, index) => (
                                        <CardGrinding
                                            key={index}
                                            namegrinding={elemento.name}
                                            quantityProduct={elemento.totalProducts}
                                            cardClass={index % 3 === 0 ? "grindingCard--success" : index % 3 === 1 ? "grindingCard--warning" : ""}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;