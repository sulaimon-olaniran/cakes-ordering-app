import React from 'react'


const PopupMessage = ({closePopup}) =>{
      
    return (
        <div className="pop-message-con">
            <h3>PLEASE NOTE THAT;</h3>
             <ul className="pop-message">
                 <li>We'd contact you for the price after your order is placed</li>
                 <li>Make sure you input your valid active number</li>
                 <li>Your order is not binding until you pay 75% price for the cake</li>
                 <li>Take note of your order code, it is used to track orders</li>
                 <li>Add the code as a transfer information during payment</li>
                 <li>Make sure the buyer's name rhymes with the account name used for payment</li>
                 
             </ul>
             <button onClick={closePopup}>Continue</button>
        </div>
    )
}

export default PopupMessage