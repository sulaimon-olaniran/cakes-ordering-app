import React from 'react'
import './OrderPage.css'
import { withFormik, Form, Field } from 'formik'
import Yup from 'yup'

const OrderPage = ({ values }) => {
    

    return (
        <div className="form-container">
            <h2>Fill to order</h2>
            <Form className="form-field">
                <div className="cake-field">
                    <div className="cake-field-title">
                        <h3>choose a cake</h3>
                    </div>
                    <div className="cake-selection">
                        <Field type="radio" name="cakeType" id="yellow" value="yellow butter cake"
                                                    />
                        <label htmlFor="yellow">Yellow Butter Cake</label><br />

                        <Field type="radio" name="cakeType" id="pound" value="pound cake"  />
                        <label htmlFor="pound">Pound Cake</label><br/>

                        <Field type="radio" name="cakeType" id="carrot" value="carrot cake" />
                        <label htmlFor="carrot">Carrot Cake</label><br />

                        <Field type="radio" name="cakeType" id="genoise" value="Genoise cake" />
                        <label htmlFor="genoise">Genoise Cake</label><br />

                        <Field type="radio" name="cakeType" id="confetti" value="Confetti cake" />
                        <label htmlFor="confetti">Confetti Cake</label><br/>

                        <Field type="radio" name="cakeType" id="chocolateCake" value="chocolate cake" />
                        <label htmlFor="chocolateCake">Chocolate Cake</label><br />
                        <span >
                            <Field type="radio" name="cakeType" id="other" value="other" />
                            <label htmlFor="other" >other options </label>
                            <Field placeholder="Others" name="otherCake" id="other" type="text" />

                        </span>

                    </div>
                </div>
                <div className="cake-field">
                    <div className="cake-field-title">
                        <h3>choose cake filling</h3>
                    </div>
                    <div className="cake-selection">
                        <Field type="radio" name="cakeFill" id="chocolate" value="Chocolate"
                        
                        />
                        <label htmlFor="chocolate">Chocolate</label><br />

                        <Field type="radio" name="cakeFill" id="vanilla" value="Vanilla" />
                        <label htmlFor="vanilla">Vanilla</label><br />

                        <Field type="radio" name="cakeFill" id="cheeseCream" value="Cheese Cream" />
                        <label htmlFor="cheeseCream">Cheese Cream</label><br />

                        <Field type="radio" name="cakeFill" id="butterCream" value="Butter Cream" />
                        <label htmlFor="butterCream">Butter Cream</label><br />

                        <Field type="radio" name="cakeFill" id="mango" value="Mango" />
                        <label htmlFor="mango">Mango</label> <br />

                        <Field type="radio" name="cakeFill" id="blueBerry" value="Blueberry" />
                        <label htmlFor="blueBerry">Blueberry</label><br />
                        <span >
                            <Field type="radio" name="cakeFill" id="others" value="other" />
                            <label htmlFor="others" >other options </label>
                            <Field placeholder="Others" name="otherFill" type="text" />

                        </span>
                    </div>
                </div>
                <button>Submit</button>
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
            otherFill: ""
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