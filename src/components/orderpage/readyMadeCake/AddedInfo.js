import React from 'react'
import { Field } from 'formik'

const AddedInfo = ({ size, amount }) => {

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
                                <option key={i} value={size}>{size} </option>
                            )

                        })
                    }

                </Field>
                <p className="price-parag">Price : &#8358; {amount ? amount : 0} : 00 K</p>
                <Field type="text" placeholder="Cake colour..." name="cakeColor" className="full-name" />
                <Field component="textarea" name="cakeMessage" placeholder="Message on cake" className="text-area" rows="3" />
                <Field component="textarea" name="specialRequest" placeholder="Special Requests" className="text-area" rows="3" />


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


            </div>
        </div>
    )
}

export default AddedInfo