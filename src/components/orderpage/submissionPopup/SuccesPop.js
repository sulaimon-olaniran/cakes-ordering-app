import React from 'react'
import Popup from "reactjs-popup"
import './SubPopup.css'

const SuccessPop = ({ closePopup, success }) => {
    return (
        <Popup
            open={success}
            closeOnDocumentClick
            onClose={closePopup}
        >
            <div className="pop-container">
                <h3>Order Received</h3>
                <div className="pop-message-text">
                    <p>We'd contact you shortly for the price of your order</p>
                    <p>After you received price; visit the payment page to make a successful payment</p>
                    <p>Remember; your order doesn't get processed till you make up to 75% payment</p>
                    <p>Thank You</p>
                </div>

                <div className="pop-button-div">
                    <button onClick={closePopup}>Continue</button>
                </div>
            </div>

        </Popup>
    )
}

export default SuccessPop