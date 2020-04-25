import React, { useState, useEffect } from 'react'
import { withFormik, Form } from 'formik'
import DeliveryType from '../cakeforms/DeliveryType'
import AddedInfo from './AddedInfo'
import './ReadyMade.css'
import PopMessage from './popup/PopMessage'
import { ReadyMadeValidation } from './ReadyMadeValidation'


const encode = (data) => {
    const formData = new FormData();
    for (const key of Object.keys(data)) {
        formData.append(key, data[key]);
    }

    return formData;
}

const ReadyMadeForm = ({ values,errors, location }) => {
    const { image, name, price, size } = location.state

    const [popupMessage, setPopupMessage] = useState(false)

    useEffect(() => {
        setPopupMessage(true)

    }, [])

    const closePopup = () => {
        setPopupMessage(false)
    }

    

    return (
        <div className="form-container">
         
         <PopMessage closePopup={closePopup} popupMessage={popupMessage} />
            <div className="cake-info">
                <div className="cake-info-img">
                    <img src={image} alt="cake" />
                </div>
                <h3>{name}</h3>
            </div>
            <div className="order-code-con" style={{marginBottom:"10px"}}>
                <p>Order Code : {values.orderCode}</p>
            </div>
            <Form className="form-field">
                <AddedInfo size={size} />
                <DeliveryType />
                {
                    Object.entries(errors).map(([key, value]) => {

                        return (
                            <div className="error-con" key={key}><p>{value}</p></div>
                        )

                    })

                }
                <div className="button-div">
                    <button type="submit">Place Order</button>
                </div>
            </Form>

        </div>
    )

}



const FormikReadyMadeOrder = withFormik({
    mapPropsToValues({ location }) {
        return {
            orderCode: Math.random().toString(36).slice(-5),
            cakeName: location.state.name,
            buyerName: "",
            buyerNumber: "",
            orderQuantity: 1 || "",
            celebrantSex: "",
            ocassion: "",
            celebrantAge: "",
            specialRequest: "",
            cakeMessage: "",
            cakeSize: "",
            eventDate: "",
            deliveryType: "",
            city: "",
            state: "",
            postalCode: "",
            phoneNumber: "",
            secondNumber: ""

        }
    },
    validationSchema : ReadyMadeValidation,

    handleSubmit(values) {
        console.log(values)
        fetch("/", {
            method: "POST",
            body: encode({ "ready-made-form": "cake-order", ...values })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

    }

})(ReadyMadeForm)

export default FormikReadyMadeOrder

