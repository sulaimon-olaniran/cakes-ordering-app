import React from 'react'
import { Field } from 'formik'

const OtherCakeInfo = ({ setFieldValue }) => {

    return (
        <div className="cake-field ">
            <div className="cake-field-title">
                <h3>Additional Info</h3>
            </div>
            <div className="cake-selection ">
            <Field type="text" placeholder="Cake colour..." name="cakeColor" className="full-name" />

                
                <Field type="text" name="cakeMessage" placeholder="Message on cake" className="full-name" />
            
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
                
                <div className="file-field">
                    <p >Click choose file to show cake sample (optional)</p>
                    <input id="file" name="file" type="file" placeholder="You can show us a sample" onChange={(event) => {
                        setFieldValue("file", event.currentTarget.files[0]);
                    }}
                    />
                </div>

                
               


               

            </div>
        </div>

    )
}

export default OtherCakeInfo