import React from 'react'


const Message = ({closePopup}) =>{
      
    return (
        <div className="pop-message-con">
            <h3>PLEASE NOTE THAT;</h3>
             <ul className="pop-message">
                 <li>Your order is not binding until you pay 75% price for the cake</li>
                 <li>Make sure you input your valid active number</li>
                 <li>Take note of your order code, it is used to track orders</li>
                 <li>Add the code as a transfer information during payment</li>
                 <li>Make sure the buyer's name rhymes with the account name used for payment</li>
                 <div> 
                     <h4>Bank Details</h4>
                     <li>Account Num <b>:</b> 0059403085</li>
                     <li>Account Nmae <b>:</b> Leemah's Treats</li>
                     <li>Bank Name <b>:</b> Zenith Bank</li>
                 </div>
                 <li>Get payment account details at site bottom or about page</li>
             </ul>
             <button onClick={closePopup}>Continue</button>
        </div>
    )
}

export default Message