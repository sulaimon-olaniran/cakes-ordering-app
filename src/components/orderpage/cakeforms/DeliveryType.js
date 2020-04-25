import React from 'react'
import { Field } from 'formik'


const DeliveryType = () => {
    return (
        <div className="cake-field">

            <div className="cake-field-title">
                <h3>Delivery / Pick Up</h3>
            </div>

            <div className="delivery-selection">
                <span className="pickup-rad">
                    <Field type="radio" name="deliveryType" id="collection" value="Pick Up" />
                    <label htmlFor="collection">Pick Up</label>

                    <span className="delivery-rad">
                        <Field type="radio" name="deliveryType" id="delivery" value="Delivery" />
                        <label htmlFor="delivery">Delivery</label><br />

                        <div className="address">
                            <Field component="textarea" name="houseAddress" placeholder="House Address" className="text-area" rows="3" />
                            <Field type="text" name="city" placeholder="City" />
                            <Field type="text" name="state" placeholder="State/Province" />
                            <Field type="text" name="postalCode" placeholder="Postal Code" />
                            <Field type="tel" name="phoneNumber" placeholder="Phone Number" />
                            <Field type="tel" name="secondNumber" placeholder="Second Number" />
                        </div>
                    </span>

                    <div className="pick-address">
                        <h3>Pick up address</h3>
                        <h4>Leemah's Treats Cakes</h4>
                        <p>5, blah blah Street, Badagry town</p>
                        <p>Badagry, Lagos State</p>
                        <p>Phone : 0903333333, 0904444444</p>
                        <p>Email : leemasstreats@gmail.com</p>
                    </div>
                </span>

            </div>
        </div>
    )
}

export default DeliveryType