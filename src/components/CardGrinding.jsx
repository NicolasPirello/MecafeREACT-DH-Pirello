
/* { namegrinding, quantityProduct } */

function CardGrinding ( { namegrinding, quantityProduct, cardClass = "" } ) {
    const cardClasses = `grindingCard ${cardClass}`.trim();

    return (

        <div className={cardClasses}>
            <h6>{namegrinding}</h6>
            <p>{quantityProduct} Productos Disponibles</p>
        </div>

    )
}

export default CardGrinding