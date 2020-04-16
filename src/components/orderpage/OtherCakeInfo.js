import React from 'react'
import { Field } from 'formik'

const OtherCakeInfo = () => {
    return (
        <div className="cake-field">
            <div className="cake-field-title">
                <h3>Additional Info</h3>
            </div>
            <div className="cake-selection">
                <Field type="text" placeholder="Full Name" name="fullName" className="full-name" />
                <Field type="text" placeholder="Cake colour..." name="cakeColor" className="full-name" />
                <textarea form="cake-form" rows="3" cols="15" placeholder="Message on cake" className="text-area"></textarea>
                <textarea form="cake-form" rows="3" cols="15" placeholder="Other Requests" className="text-area"></textarea>
                <Field component="select" name="celebrantAge"  id="age-group" className="select-box"> 
                    <option value="Male" >Child</option>
                    <option value="Teenager" >Teenager</option>
                    <option value="Adult" >Adult</option>
                </Field>
                <Field component="select" name="celebrantSex" className="select-box" >
                    <option value="" >Choose sex : </option>
                    <option value="Male" >Male</option>
                    <option value="Female" >Female</option>
                    <option value="Corperate" >Corperate</option>
                </Field>
                <Field component="select" name="ocassion" className="select-box" >
                    <option value="" >Ocassion</option>
                    <option value="Male" >Anniversary</option>
                    <option value="Female" >Valentine</option>
                    <option value="Corperate" >Wedding</option>
                    <option value="Male" >Easter</option>
                    <option value="Female" >New year</option>
                    <option value="Corperate" >Customized</option>
    
                </Field>


            </div>
        </div>
    )
}

export default OtherCakeInfo