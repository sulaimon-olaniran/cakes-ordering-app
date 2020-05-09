import React, { useState, useEffect } from 'react'
import { withFormik, Form } from 'formik'
import DeliveryType from '../cakeforms/DeliveryType'
import AddedInfo from './AddedInfo'
import './ReadyMade.css'
import PopMessage from './popup/PopMessage'
import { ReadyMadeValidation } from './ReadyMadeValidation'
import BuyerInfo from '../cakeforms/BuyerInfo'
import Successful from './submissionPopup/Successful'
import FailurePop from '../submissionPopup/FailurePop'


const encode = (data) => {
    const formData = new FormData();
    for (const key of Object.keys(data)) {
        formData.append(key, data[key]);
    }

    return formData;
}


const ReadyMadeForm = ({ values, errors, resetForm, location, status, isSubmiting, setStatus }) => {
    const { image, name, price, size } = location.state

    const [popupMessage, setPopupMessage] = useState(false)

    const getCakePriceFromSize = cake => {

        for (var i = 0; i < price.length; i++) {
            if (cake === size[i]) {
                return price[i]
            }
        }
    }
    console.log(getCakePriceFromSize(values.cakeSize && values.cakeSize))
    const priceBySize = getCakePriceFromSize(values.cakeSize && values.cakeSize)

    useEffect(() => {
        setPopupMessage(true)
        window.scrollTo(0, 0)
    }, [])

    const closePopup = () => {
        setPopupMessage(false)
    }

    const closeUp = () => {
        setStatus({ success: false })
        setStatus({ failure: false })
        resetForm()
    }



    return (
        <div className="form-container-wrapper">
            <div className="form-container">

                <PopMessage closePopup={closePopup} popupMessage={popupMessage} />
                <Successful closePopup={closeUp} success={status ? status.success : false}
                    orderCode={values.orderCode} cakePrice={priceBySize} buyerName={values.buyerName}
                    buyerNumber={values.buyerNumber}
                />
                <FailurePop closePopup={closeUp} failure={status ? status.failure : false} />

                <div className="cake-info">
                    <div className="cake-info-img">
                        <img src={image} alt="cake" />
                    </div>
                    <h3>{name}</h3>
                </div>
                <div className="order-code-con" style={{ marginBottom: "10px" }}>
                    <p>Order Code : {values.orderCode}</p>
                </div>
                <Form className="form-field">
                    <AddedInfo size={size} amount={priceBySize} />
                    <BuyerInfo />
                    <DeliveryType />
                    {
                        Object.entries(errors).map(([key, value]) => {

                            return (
                                <div className="error-con" key={key}><p>{value}</p></div>
                            )

                        })

                    }
                    <div className="button-div">
                        <button type="submit" disabled={isSubmiting}>Place Order</button>
                    </div>
                </Form>

            </div>
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

    validationSchema: ReadyMadeValidation,

    handleSubmit(values, { resetForm, setSubmitting, setStatus }) {
        const removedValues = ""
        const filteredObject = {};

        for (let e in values) {
            if (values.hasOwnProperty(e)) {
                if (removedValues.indexOf(values[e]) === -1) {
                    filteredObject[e] = values[e];
                }
            }
        }
        console.log(filteredObject)

        fetch("/", {
            method: "POST",
            body: encode({ "ready-made-form": "cake-order", ...filteredObject })
        })
            .then(() => {
                alert("Success!")
                setSubmitting(false)
                setStatus({ success: true })
            })
            .catch(error => {
                alert(error)
                setSubmitting(false)
                error && setStatus({ failure: true })
            });

    }

})(ReadyMadeForm)

export default FormikReadyMadeOrder

