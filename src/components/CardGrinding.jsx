
/* { namegrinding, quantityProduct } */

function CardGrinding ( { namegrinding, quantityProduct } ) {
    return (

        <div className="grindingCard">
            <h6>{namegrinding}</h6>
            <p>{quantityProduct} Productos Disponibles</p>
        </div>

    )
}

export default CardGrinding