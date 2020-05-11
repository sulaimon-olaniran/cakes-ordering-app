import React from 'react'


const Message = ({closePopup}) =>{
      
    return (
        <div className="pop-message-con">
            <h3>PLEASE NOTE THAT;</h3>
             <ul className="pop-message">
                 <li>Your order is not binding until you pay 75% price for the cake</li>
                 <li>Make sure you input your valid active number and Email</li>
                 <li>Take note of your order code, it is used to track orders</li>
                 <li>Add the code as a transfer information during payment</li>
                 <li>Delivery cost &#8358;2000 - &#8358;2500 depending on location</li>
                 <li>Make sure the buyer's name rhymes with the account name used for payment</li>
             </ul>
             <button onClick={closePopup}>Continue</button>
        </div>
    )
}

export default Message