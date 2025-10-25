

function CardTotals ( { title, quantity, icon, cardClass = "" } ) {

    const cardClasses = `dashboard_card ${cardClass}`.trim();

    return(

        <div className={cardClasses}>

            <div className="cardContainer">
                <div>
                    <h4>{title}</h4>
                    <p>{quantity}</p>
                </div>
                {icon}
            </div>

        </div>

    )

}

export default CardTotals;