import { useState ,useEffect } from "react"
import CardGrinding from "./CardGrinding"
import CardTotals from "./CardTotals"
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { AiOutlineUser, AiOutlineUserAdd } from "react-icons/ai";

/*

<div className="dashboard_card dashboard_cardColor">
    <h4>cantidad de Productos por Gramos</h4>
    
    <div className="gramesContainer">
        <div className="gramesBox">
            <span>250g:</span>
            <p>10</p>
        </div>

        <div className="gramesBox">
            <span>500g:</span>
            <p>15</p>
        </div>

        <div className="gramesBox">
            <span>1000g:</span>
            <p>20</p>
        </div>
    </div>

</div>

*/

function Dashboard() {

    /* Total de Productos en cada uno de sus Moliendas */

    let [ totalProductsTypeGrinding , setTotalProductsTypeGrinding ] = useState([])

    useEffect( () => {
        fetch("https://mecafe-production.up.railway.app/api/totalProductsTypeGrinding")
            .then(response => response.json())
            .then(result => {
                setTotalProductsTypeGrinding(result)
            })
    }, [])

    /* Total de Productos con sus gramajes */

    let [ totalProductsGrames, setTotalProductsGrames ] = useState([])

    useEffect( () => {

        fetch (`https://mecafe-production.up.railway.app/api/totalProductGrames`)
            .then(response => response.json())
            .then(result => {
                setTotalProductsGrames(result)
        })

    }, [])

    console.log(totalProductsGrames)

    /* Total de Productos General */

    let [ totalProducts , setTotalProduct ] = useState([])

    useEffect( () => {
        fetch ("https://mecafe-production.up.railway.app/api/totalProducts")
            .then(response => response.json())
            .then(result => {
                setTotalProduct(result)
            })
    }, [] )

    /* Total de Usuarios */

    let [ totalUsers, setTotalUsers ] = useState([])

    useEffect ( () => {
        fetch("https://mecafe-production.up.railway.app/api/totalUsers")
            .then(response => response.json())
            .then(result => {
                setTotalUsers(result)
            })
    }, [])

    /* Total de Roles */

    let [ totalRolesUser, setTotalRolesUser ] = useState([])

    useEffect ( () => {
        fetch("https://mecafe-production.up.railway.app/api/totalRolesUser")
            .then(response => response.json())
            .then(result => {
                setTotalRolesUser(result)
            })
    }, [])

    /* Ultimo Producto Creado */

    let [ lastProductCreated, setLastProductCreated ] = useState([])

    useEffect( () => {
        fetch("https://mecafe-production.up.railway.app/api/lastProductCreated")
            .then(response => response.json())
            .then(result => {
                setLastProductCreated([result])
            })
    }, [] )

    /* Ultimo Usuario Creado */

    let [ lastUserCreated, setLastUserCreated ] = useState([])

    useEffect ( () => {
        fetch("https://mecafe-production.up.railway.app/api/lastUserCreated")
            .then(response => response.json())
            .then(result => {
                setLastUserCreated([result])
            })
    }, [] )

    /* " HTML - VISTA " */

    return (

        <div className="containerCenterWeb">

            <div className="generalFormat dashboardGridGeneral">
                
                {/* Tarjetas - API CONSUMIDA */}

                <div className="dashboard_cardContainer">


                    <CardTotals 
                        title="Total de Productos"
                        quantity={totalProducts.totalProductsActives}
                        icon= <MdOutlineProductionQuantityLimits className="cardIcon"/>
                    />

                    <CardTotals 
                        title="Total de Usuarios"
                        quantity={totalUsers.totalUsers}
                        icon= <AiOutlineUser className="cardIcon"/>
                    />

                    <CardTotals 
                        title="Total Roles de Usuario"
                        quantity={totalRolesUser.totalRoles}
                        icon= <AiOutlineUserAdd className="cardIcon"/>
                    />

                </div>

                {/* Detalle Ultimo Producto Creado */}

                {lastProductCreated.map((elementoGeneral, index) => {

                    let rutaImagenProucto = `https://mecafe-production.up.railway.app/img/productos/${elementoGeneral.images_products[0].path}`

                    return(

                        <div key={index} className="dashboard_ProductDetail">

                            <div className="ProductTitle">
                                <h6>{elementoGeneral.name}</h6>
                            </div>

                            <div className="productImageContainer">
                                <img src={rutaImagenProucto} alt=""/>
                            </div>

                            <div className="productDescriptionContainer">
                                    <h6>Descripcion del Producto</h6>
                                    <p>{elementoGeneral.description} Mecafe es disfrutar del mejor cafe, una excelente calidad y el proceso mas natural para cuidar tu salud.</p>
                            </div>

                            <div className="productGramesContainer">
                                    <h6>Gramos disponibles:</h6>
                                    <ul>
                                        {elementoGeneral.products_grames.map((element, index) => {
                                            return(
                                                <li key={index}>{element.grames}g</li>
                                            )
                                        })}
                                    </ul>
                            </div>

                            <div className="productGrindingsContainer">
                                    <h6>Moliendas Disponibles:</h6>
                                    <ul>
                                        {elementoGeneral.type_grindings.map((element, index) => {
                                            return(
                                                <li key={index}>{element.name}</li>
                                            )
                                        })}
                                    </ul>
                            </div>

                        </div>

                )})}

                {/* Detalle Ultimo Usuario Creado */}

                {lastUserCreated.map((elementoGeneral, index) => {

                    let rutaImagen = `https://mecafe-production.up.railway.app/img/profiles/${elementoGeneral.image}`

                    let directionDefault = {}

                    
                    elementoGeneral.directions.map(elemento => {
                        
                        if (elemento.default){
                            directionDefault = elemento
                        }
                        
                        return directionDefault
                    })

                    return(
                        
                        <div key={index} className="dashboard_UserDetail">

                            <div className="userTitle">
                                <h6>Ultimo usuario</h6>
                            </div>

                            <div className="userImageContainer">
                                <img src={rutaImagen} alt=""/>
                            </div>

                            <div className="userDataContainer">

                                <h6>Datos personales:</h6>

                                <div className="userName">
                                    <span>Nombre:</span>
                                    <p>{elementoGeneral.firstName}</p>
                                </div>

                                <div className="userLastName">
                                    <span>Apellido:</span>
                                    <p>{elementoGeneral.lastName}</p>
                                </div>

                                <div className="userEmail">
                                    <span>Email:</span>
                                    <p>{elementoGeneral.email}</p>
                                </div>

                                <div className="userRol">
                                    <span>Rol:</span>
                                    <p>{elementoGeneral.roles.name}</p>
                                </div>

                                <div className="userCountry">
                                    <span>Pais:</span>
                                    <p>{directionDefault.country ? directionDefault.country : "Sin asignar"}</p>
                                </div>

                                <div className="userCity">
                                    <span>Ciudad:</span>
                                    <p>{directionDefault.city ? directionDefault.city : "Sin asignar"}</p>
                                </div>

                                <div className="userStreet">
                                    <span>Calle:</span>
                                    <p>{directionDefault.street ? directionDefault.street : "Sin asignar"}</p>
                                </div>

                            </div>

                        </div>

                    )

                })}

                {/* Tarjetas de Cantidad de Productos por su tipo de molienda - API CONSUMIDA */}

                <div className="dashboard_productsGrinding">

                    <div className="grindingTitle">
                        <h6>Productos por Tipos de Molienda</h6>
                    </div>

                    <div className="productsGrinding__grid">

                        {totalProductsTypeGrinding.map((elemento, index) => {

                            let quantity = ""

                            elemento.products.map(element => {
                                return quantity = element.totalProducts
                            })

                            return(
                                <CardGrinding
                                    namegrinding= {elemento.name}
                                    quantityProduct= {quantity}
                                    key={index}
                                />
                            )
                        })}

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;
