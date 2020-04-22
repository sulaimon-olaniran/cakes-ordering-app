import React, { useState } from 'react'
import { Field } from 'formik'

const OtherCakeInfo = () => {
    const [count, setCount] = useState(1)
    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <div className="cake-field other-field">
            <div className="cake-field-title">
                <h3>Additional Info</h3>
            </div>
            <div className="cake-selection other-info">

                <Field component="select" name="cakeSize" className="select-box" >
                    <option value="" >Cake size</option>
                    <option value="6' inches" >6' inches</option>
                    <option value="8' inches" >8' inches</option>
                    <option value="10' inches" >10' inches</option>
                    <option value="12' inches" >12' inches</option>
                    <option value="14' inches" >14' inches</option>
                    <option value="18' inches" >18' inches</option>
                    <option value="20' inches" >20' inches</option>

                </Field>

                <Field type="number"  name="orderQuantity" placeholder="Quantity(1)" className="number-input" />

                <Field type="text" placeholder="Full Name" name="fullName" className="full-name" />
                <Field type="text" placeholder="Cake colour..." name="cakeColor" className="full-name" />
                <Field component="textarea" name="cakeMessage" placeholder="Message on cake" className="text-area" rows="3" />
                <Field component="textarea" name="specialRequest" placeholder="Special Requests" className="text-area" rows="3" />


                <Field component="select" name="celebrantAge" id="age-group" className="select-box">
                    <option value="">Age</option>
                    <option value="Child" >Child</option>
                    <option value="Teenager" >Teenager</option>
                    <option value="Adult" >Adult</option>
                </Field>

                <Field component="select" name="celebrantSex" className="select-box" >
                    <option value="" >Sex </option>
                    <option value="Male" >Male</option>
                    <option value="Female" >Female</option>
                    <option value="Corperate" >Corperate</option>
                </Field>

                <Field component="select" name="ocassion" className="select-box" >
                    <option value="" >Ocassion</option>
                    <option value="Anniversary" >Anniversary</option>
                    <option value="Valentine" >Valentine</option>
                    <option value="Wedding" >Wedding</option>
                    <option value="Birthday" >Birthday</option>
                    <option value="Easter" >Easter</option>
                    <option value="New Year" >New year</option>
                    <option value="Other" >Other</option>

                </Field>
                <div>
                    <label htmlFor="event-date">Date of Ocassion</label>
                    <Field type="date" name="eventDate" className="date-input" id="event-date" />
                </div>


            </div>
        </div>
    )
}

export default OtherCakeInfo