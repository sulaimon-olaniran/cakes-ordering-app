import React from 'react'
import Popup from "reactjs-popup"
import './PopMessage.css'
import Message from './Message'

const PopMessage = ({ closePopup, popupMessage }) => {

    return (
        <Popup
            open={popupMessage}
            closeOnDocumentClick
            onClose={closePopup}
        >
            <Message closePopup={closePopup} />
        </Popup>

    )
}

export default PopMessage