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

                <div>
                 <button>Submit</button>
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
            cakeShape : "",
            otherShape : "",
            cakeFlavor : "",
            otherFlavor : "",
            celebrantSex : "choose sex"
        }
    },

    handleSubmit(values) {
        console.log(values)
    }

})(OrderPage)

export default FormikOrderPage





/*
<section id="second" className="section">
                <div className="container">
                    <input type="checkbox" name="group2" id="checkbox-1" />
                    <label for="checkbox-1"><span className="checkbox">Oranges</span></label>Name
                </div>
                <div class="container">
                    <input type="checkbox" name="group2" id="checkbox-2" />
                    <label for="checkbox-2"><span class="checkbox">Apples</span></label>
                </div>
                <div class="container">
                    <input type="checkbox" name="group2" id="checkbox-3" />
                    <label for="checkbox-3"><span class="checkbox">Avocados</span></label>
                </div>
            </section>
*/