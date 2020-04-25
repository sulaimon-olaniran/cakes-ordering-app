import React from 'react'
import Popup from "reactjs-popup"
import './Popup.css'
import PopupMessage from './PopupMessage'

const PopupInfo = ({ closePopup, popupMessage }) => {

    return (
        <Popup
            open={popupMessage}
            closeOnDocumentClick
            onClose={closePopup}
        >
            <PopupMessage closePopup={closePopup}/>
        </Popup>

    )
}

export default PopupInfo