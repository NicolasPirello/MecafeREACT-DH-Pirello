

function CardTotals ( { title, quantity, icon } ) {

    return(

        <div className="dashboard_card dashboard_cardColor">

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