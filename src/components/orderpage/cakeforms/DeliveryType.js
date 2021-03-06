import React from 'react'
import { Field } from 'formik'


const DeliveryType = () => {
    return (
        <div className="cake-field">

            <div className="cake-field-title">
                <h3>Delivery / Pick Up</h3>
            </div>

            <div className="cake-selection delivery-con">
                <span className="pickup-rad">
                    <Field type="radio" name="deliveryType" id="collection" value="Pick Up" />
                    <label htmlFor="collection">Pick Up</label>

                    <span className="delivery-rad">
                        <Field type="radio" name="deliveryType" id="delivery" value="Delivery" />
                        <label htmlFor="delivery">Delivery</label><br />

                        <div className="address">
                            <Field component="textarea" name="houseAddress" placeholder="House Address" className="text-area" rows="3" />
                            <Field type="text" name="city" placeholder="City" />
                            
                            <Field component="select" name="state" className="select-box" >
                                <option value="" >State</option>
                                <option value="6' inches" >Lagos State</option>

                            </Field>
                            <Field type="text" name="postalCode" placeholder="Postal Code" />
                            <Field type="tel" name="phoneNumber" placeholder="Phone Number" />
                            <Field type="tel" name="secondNumber" placeholder="Second Number" />
                        </div>
                    </span>

                    <div className="pick-address">
                        <h3>Pick up address</h3>
                        <h4>Leemah's Treats Cakes</h4>
                        <p>17, Caroline Street, Aradagun</p>
                        <p>Badagry, Lagos State</p>
                        <p>Phone : 08088614722, 08112231401</p>
                        <p>Email : sadeeyahalimah@gmail.com</p>
                    </div>
                </span>

            </div>
        </div>
    )
}

export default DeliveryType