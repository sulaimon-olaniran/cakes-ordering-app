import React from 'react'
import Popup from "reactjs-popup"
import { NavLink } from 'react-router-dom'

const Successful = ({ success, closePopup, orderCode, buyerName, buyerNumber, cakePrice }) => {
    return (
        <Popup
            open={success}
            closeOnDocumentClick
            onClose={closePopup}
        >
            <div className="pop-container">
                <h3>Purchase Received</h3>
                <div className="pop-message-text">
                    <p>Please your order doesn't get processed till you make up to 75% payment </p>
                    <p>Click the Make Payment button to go to the payment page to complete Purchase</p>
                    <p>As soon as your payment is Received, we begin baking your cake</p>
                    <p>Thank You</p>
                </div>

                <div className="pop-button-div">
                    <NavLink to={{
                        pathname: '/payment',
                        state: {
                            code: orderCode,
                            names: buyerName,
                            number: buyerNumber,
                            price:  cakePrice
                        }
                    }
                    }

                    >
                        <button>Make Payment</button>
                    </NavLink>
                    <button onClick={closePopup}>Continue</button>
                </div>
            </div>

        </Popup>
    )
}

export default Successful