import React from 'react'
import './OrderPage.css'
import { withFormik, Form } from 'formik'
//import Yup from 'yup'
import CakeTypes from './cakeforms/CakeTypes'
import CakeFill from './cakeforms/CakeFill'
import CakeShapes from './cakeforms/CakeShapes'
import CakeFlavours from './cakeforms/CakeFlavours'
import CakeIcing from './cakeforms/CakeIcing'
import OtherCakeInfo from './OtherCakeInfo'
import DeliveryType from './cakeforms/DeliveryType'

const OrderPage = ({ values }) => {


    return (
        <div className="form-container">

            <div className="page-header">
                <h2>Fill form to place an order</h2>
            </div>

            <Form className="form-field" id="cake-form">
                <CakeTypes />
                <CakeFill />
                <CakeShapes />
                <CakeFlavours />
                <CakeIcing />
                <OtherCakeInfo />
                <DeliveryType />

                <div className="button-div">
                  <button type="submit">Place Order</button>
                </div>
            </Form>

        </div>
    )

}



const FormikOrderPage = withFormik({
    mapPropsToValues() {
        return {
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
            eventDate: "",
            deliveryType: "",
            city: "",
            state: "",
            postalCode :"",
            phoneNumber :"",
            secondNumber : ""

        }
    },

    handleSubmit(values) {
        console.log(values)
    }

})(OrderPage)

export default FormikOrderPage





/*
    <a href="https://www.freepik.com/free-photos-vectors/background">Background photo created by mrsiraphol - www.freepik.com</a>
*/