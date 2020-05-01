import React, { useState, useEffect } from 'react'
import './OrderPage.css'
import { withFormik, Form } from 'formik'
import CakeTypes from './cakeforms/CakeTypes'
import CakeFill from './cakeforms/CakeFill'
import CakeShapes from './cakeforms/CakeShapes'
import CakeFlavours from './cakeforms/CakeFlavours'
import CakeIcing from './cakeforms/CakeIcing'
import OtherCakeInfo from './cakeforms/OtherCakeInfo'
import DeliveryType from './cakeforms/DeliveryType'
import { MainOrderValidation } from './OrderValidation'
import PopupInfo from './popups/PopupInfo'
import BuyerInfo from './cakeforms/BuyerInfo'
import SuccessPop from './submissionPopup/SuccesPop'
import FailurePop from './submissionPopup/FailurePop'

const encode = (data) => {
    const formData = new FormData();
    for (const key of Object.keys(data)) {
        formData.append(key, data[key]);
    }

    return formData;
}


const OrderPage = ({ values, errors, touched, setFieldValue, isSubmitting, status, setStatus }) => {
    const [popupMessage, setPopupMessage] = useState(false)
 
    useEffect(() => {
        setPopupMessage(true)

    }, [])

    const closePopup = () => {
        setPopupMessage(false)
    }
    const closeUp = () => {
        setStatus({success: false})
        setStatus({failure: false})
    }

    return (
        <div className="form-container-wrapper">
            <div className="form-container">
                <PopupInfo closePopup={closePopup} popupMessage={popupMessage} />
                <SuccessPop closePopup={closeUp} success={status ? status.success : false} />
                <FailurePop closePopup={closeUp} failure={status? status.failure : false} />
                
                <div className="page-header">
                    <h2>Fill form to place an order</h2>
                </div>
                <div className="order-code-con">
                    <p>Order Code : {values.orderCode}</p>
                </div>
                <Form className="form-field" data-netlify-recaptcha="true" >
                    <input type="file" name="cakeSample" hidden />
                    <CakeTypes />
                    <CakeFill />
                    <CakeShapes />
                    <CakeFlavours />
                    <CakeIcing />
                    <OtherCakeInfo setFieldValue={setFieldValue} />
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
                        <button type="submit" disabled={isSubmitting}>Place Order</button>
                    </div>

                </Form>
            </div>
        </div>
    )

}   



const FormikOrderPage = withFormik({
    mapPropsToValues() {
        return {
            orderCode: Math.random().toString(36).slice(-5),
            cakeSample: "",
            cakeType: "",
            otherCake: "",
            cakeFill: "",
            otherFill: "",
            cakeShape: "",
            otherShape: "",
            cakeFlavor: "",
            otherFlavor: "",
            cakeIcing: "",
            otherIcing: "",
            fullName: "",
            celebrantSex: "",
            ocassion: "",
            celebrantAge: "",
            cakeColor: "",
            specialRequest: "",
            cakeMessage: "",
            cakeSize: "",
            orderQuantity: 1 || "",
            eventDate: "",
            collectionDate: "",
            deliveryType: "",
            city: "",
            state: "",
            postalCode: "",
            phoneNumber: "",
            secondNumber: "",
            buyerNumber: ""

        }
    },

    validationSchema: MainOrderValidation,

    handleSubmit(values, { resetForm, setSubmitting, setStatus}) {
        if (values.cakeType !== "other") {
            values.otherCake = ""
        }
        values.cakeSample = values.file
        
        const removedValues = ["", undefined]
        const filteredObject = {};
        for(let e in values) {
            if (values.hasOwnProperty(e)) {
              if (removedValues.indexOf(values[e]) === -1) {
                  filteredObject[e] = values[e];
              }
            }
        }

        console.log(filteredObject)

        fetch("/", {
            method: "POST",
            body: encode({ "form-name": "cake-order", ...filteredObject })
        })
            .then(() =>{
                resetForm()
                setSubmitting(false)
                setStatus({ success : true})
            })
            .catch(error => {
                console.log(error)
                setSubmitting(false)
                error && setStatus({failure : true})
            })


    }

})(OrderPage)

export default FormikOrderPage





/*
    <a href="https://www.freepik.com/free-photos-vectors/background">Background photo created by mrsiraphol - www.freepik.com</a>
*/