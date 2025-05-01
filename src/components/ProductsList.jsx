import { useState, useEffect } from "react";


function ProductList () {

    let [ productList, setProductList ] = useState([])

    useEffect ( () => {
        fetch("https://mecafe-production.up.railway.app/api/productsActives")
            .then(response => response.json())
            .then(result => {
                setProductList(result)
            })
    }, [])


    return(

        <div className="containerCenterWeb">

            <h1 className="titleProductListContainer">Listado de Productos</h1>
                    
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