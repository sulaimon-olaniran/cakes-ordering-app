import React from 'react'
import { Field } from 'formik'


const CakeFill = () => {
    return (
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
                    <Field type="radio" name="cakeFill" id="other-fill" value="other" />
                    <label htmlFor="other-fill" >other options </label><br />
                    <Field placeholder="Others" name="otherFill" type="text" />

                </span>
            </div>
        </div>
    )
}

export default CakeFill