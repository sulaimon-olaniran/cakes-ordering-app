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


const encode = (data) => {
    const formData = new FormData();
    for (const key of Object.keys(data)) {
        formData.append(key, data[key]);
    }

    return formData;
}

const OrderPage = ({ values, errors, touched, setFieldValue }) => {
    const [popupMessage, setPopupMessage] = useState(false)

    useEffect(() => {
        setPopupMessage(true)

    }, [])

    const closePopup = () => {
        setPopupMessage(false)
    }

    return (
        <div className="form-container-wrapper">
            <div className="form-container">
                <PopupInfo closePopup={closePopup} popupMessage={popupMessage} />
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
                        <button type="submit">Place Order</button>
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
            collectingDate: "",
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

    handleSubmit(values) {
        if (values.cakeType !== "other") {
            values.otherCake = ""
        }

        values.cakeSample = values.file

        console.log(values)

        fetch("/", {
            method: "POST",
            body: encode({ "form-name": "cake-order", ...values })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));


    }

})(OrderPage)

export default FormikOrderPage





/*
    <a href="https://www.freepik.com/free-photos-vectors/background">Background photo created by mrsiraphol - www.freepik.com</a>
*/