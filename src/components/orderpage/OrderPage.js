import React from 'react'
import './OrderPage.css'
import { withFormik, Form } from 'formik'
import * as yup from 'yup'
import CakeTypes from './cakeforms/CakeTypes'
import CakeFill from './cakeforms/CakeFill'
import CakeShapes from './cakeforms/CakeShapes'
import CakeFlavours from './cakeforms/CakeFlavours'
import CakeIcing from './cakeforms/CakeIcing'
import OtherCakeInfo from './OtherCakeInfo'
import DeliveryType from './cakeforms/DeliveryType'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

const OrderPage = ({ values, errors, touched }) => {
    const checking = () => {
        console.log(values)
    }

    return (
        <div className="form-container">

            <div className="page-header">
                <h2>Fill form to place an order</h2>
            </div>

            <Form className="form-field" data-netlify-recaptcha="true" >
                <CakeTypes />
                <CakeFill />
                <CakeShapes />
                <CakeFlavours />
                <CakeIcing />
                <OtherCakeInfo />
                <DeliveryType />
                {
                    Object.entries(errors).map(([key, value]) => {

                        return (
                            <div className="error-con" key={key}><p>{value}</p></div>
                        )

                    })

                }
                <div data-netlify-recaptcha="true"></div>
                <div className="button-div">
                    <button type="submit">Place Order</button>
                </div>
                <div data-netlify-recaptcha="true"></div>
            </Form>
   
<button onClick={checking} >Click Me Click Me</button>
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
            postalCode: "",
            phoneNumber: "",
            secondNumber: ""

        }
    },

    validationSchema: yup.object().shape({
        cakeType: yup.string().required("Please Select a cake type"),

        otherCake: yup.string().when('cakeType', {
            is: "other",
            then: yup.string().required("What type of cake do you want?")
        }),

        cakeFill: yup.string().required("Please Select the cake filling"),

        otherFill: yup.string().when('cakeFill', {
            is: "other",
            then: yup.string().required("What cake fill do you want ?")
        }),

        cakeShape: yup.string().required("Please Select the cake shape"),

        otherShape: yup.string().when('cakeShape', {
            is: "other",
            then: yup.string().required("What's the shape of the cake ?")
        }),

        cakeFlavor: yup.string().required("Please Select the cake flavor"),

        otherFlavor: yup.string().when('cakeFlavor', {
            is: "other",
            then: yup.string().required("What type of cake flavor do you want ?")
        }),

        cakeIcing: yup.string().required("Please Select the Icing for the cake"),

        otherIcing: yup.string().when('cakeIcing', {
            is: "other",
            then: yup.string().required("What Icing do you want for the cake ?")
        }),

        fullName: yup.string().required("Please Name of buyer is required"),
        celebrantSex: yup.string().required("Sex of celebrant is required"),
        celebrantAge: yup.string().required("Choose an age group for the celebrant"),
        ocassion: yup.string().required("Please tell us the ocassion"),
        cakeColor: yup.string().required("What is your prefered cake colour ?"),
        cakeMessage: yup.string().required("Message on cake").min(10, "cake message too short").max(25, "cake message too long"),
        cakeSize: yup.string().required("Please Select the cake Size"),
        eventDate: yup.date().min(new Date(), "please select a valid date").required("Date of the Ocassion ?"),
        deliveryType: yup.string().required("How do you want your cake delivered ?"),
        city: yup.string().when('deliveryType', {
            is: "Delivery",
            then: yup.string().required("What City do you want your cake delivered ?")
        }),
        state: yup.string().when('deliveryType', {
            is: "Delivery",
            then: yup.string().required("What State do you want your cake delivered ?")
        }),
        phoneNumber: yup.string().when('deliveryType', {
            is: "Delivery",
            then: yup.string().required("phone number of recipient required")
        }),

        secondNumber: yup.string().when('deliveryType', {
            is: "Delivery",
            then: yup.string().required("additional number required")
        }),

    }),

    handleSubmit(values) {
        if (values.cakeType !== "other") {
            values.otherCake = ""
        }

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...values })
          })
            .then(() => alert("Success!"))
            .catch(error => alert(error));
    

    }

})(OrderPage)

export default FormikOrderPage





/*
    <a href="https://www.freepik.com/free-photos-vectors/background">Background photo created by mrsiraphol - www.freepik.com</a>
*/