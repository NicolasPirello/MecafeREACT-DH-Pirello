import React from "react";
import { useApiWithFallback } from "../hooks/useApiWithFallback";


function ProductList () {

    // Modo instantáneo para máxima velocidad
    const timeout = 1000; // 1 segundo
    const instantMode = true;
    const { data: productList, loading, error, isUsingMock } = useApiWithFallback('/api/productsActives', 'productsActives', timeout, instantMode);

    // Mostrar indicador de carga minimalista y rápido
    if (loading) {
        return (
            <div className="containerCenterWeb">
                <div className="generalFormat">
                    <h1 className="titleProductListContainer">Listado de Productos</h1>
                    <div style={{ textAlign: 'center', padding: '50px' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚡</div>
                        <p style={{ color: '#61dafb', fontSize: '1.2rem' }}>Cargando productos en tiempo récord...</p>
                    </div>
                </div>
            </div>
        );
    }

    // Mostrar error si no hay datos ni mockup
    if (error && !productList) {
        return (
            <div className="containerCenterWeb">
                <div className="generalFormat">
                    <h1 className="titleProductListContainer">Listado de Productos</h1>
                    <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
                        <p>Error al cargar los productos. Por favor, intenta más tarde.</p>
                    </div>
                </div>
            </div>
        );
    }


    return(

        <div className="containerCenterWeb">

            <h1 className="titleProductListContainer">Listado de Productos</h1>

            {/* Indicador de datos mockup */}
            {isUsingMock && (
                <div style={{
                    backgroundColor: '#fff3cd',
                    border: '1px solid #ffeeba',
                    borderRadius: '4px',
                    padding: '10px',
                    marginTop: '20px',
                    marginBottom: '0px',
                    marginLeft: '25px',
                    marginRight: '25px',
                    color: '#856404'
                }}>
                    <strong>⚠️ Modo Demostración:</strong> Mostrando datos de ejemplo (API no disponible)
                </div>
            )}

            <div className="productListGeneral">
                
                <table>

                    <thead>

                        <tr>
                            <th className="thOcultoUno">Id</th>
                            <th className="thOcultoDos">Name</th>
                            <th className="thOcultoTres">Rating</th>
                            <th className="thOcultoCuatro">Molienda</th>
                            <th className="thOcultoCinco">Gramos</th>
                            <th className="thOcultoSeis">Descripcion</th>
                        </tr>

                    </thead>

                    <tbody>

                        {productList.map((element, index) => {

                            

                            return(

                            <tr  key={index}>

                                <td className="thOcultoUno">{element.id}</td>
                                <td className="thOcultoDos">{element.name}</td>
                                <td className="thOcultoTres">{element.rating}</td>
                                <td className="thOcultoCuatro">
                                    <div>
                                        {element.type_grindings.map((element, index) => {
                                            return <p key={index}>{element.name},</p>
                                        })}
                                    </div> 
                                </td>
                                <td className="thOcultoCinco">
                                    <div>
                                        {element.products_grames.map((element, index) => {
                                            return <p key={index}>{element.grames}G</p>
                                        })}
                                    </div>  
                                </td>
                                <td className="thOcultoSeis">{element.description}</td>

                            </tr>
                            )


                        })}


                    </tbody>

                </table>
                


            </div>

        </div>

    )

}

export default ProductList;