import React from 'react'
import { Field } from 'formik'

const AddedInfo = (props) => {
    const { size } = props
    return (
        <div className="cake-field other-field">
            <div className="cake-field-title">
                <h3>Additional Info</h3>
            </div>
            <div className="cake-selection other-info">

                <Field component="select" name="cakeSize" className="select-box" >
                    <option value="" >Cake size</option>
                     {
                         size.map((size, i) => {
                             return (
                            <option  key={i} value={`${size}' inches`} >{size}" inches </option>
                         )
                        
                       })
                     }

                </Field>
            
                <Field type="text" placeholder="Buyer's Full Name" name="buyerName" className="full-name" />
                <Field type="tel" name="buyerNumber" placeholder="Buyer's Number" />

                <label><Field type="number" name="orderQuantity" placeholder="Quantity(1)" className="number-input" /> Quantity of order</label>
                <Field component="textarea" name="cakemessage" placeholder="Message on cake" className="text-area" rows="3" />
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
                <div>
                    <label htmlFor="event-date">Prefered collection date</label>
                    <Field type="date" name="collectionDate" className="date-input" id="event-date" />
                </div>


            </div>
        </div>
    )
}

export default AddedInfo