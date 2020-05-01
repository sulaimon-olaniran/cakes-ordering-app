import React from 'react'
import Popup from "reactjs-popup"
import './SubPopup.css'

const FailurePop = ({ closePopup, failure }) => {
    return (
        <Popup
            open={failure}
            closeOnDocumentClick
            onClose={closePopup}
        >
            <div className="pop-container">
                <h3>There Was an Error</h3>
                <div className="pop-message-text">
                    <p>Please Check Your Internet Connection</p>
                    <p>Please Make Sure You're connected to the internet</p>
                    <p>Please Ensure you are using a strong internet connection</p>
                    <p>Thank You</p>
                </div>

                <div>
                    <button onClick={closePopup}>Continue</button>
                </div>
            </div>

        </Popup>
    )
}

export default FailurePop