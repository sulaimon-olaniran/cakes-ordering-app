import React from 'react'
import { Field } from 'formik'

const BuyerInfo = ({ error, touch }) => {
    return (
        <div className="cake-field">
            <div className="cake-field-title">
                <h3>Buyer Info</h3>
            </div>
            <div className="cake-selection">
            <Field component="select" name="celebrantAge" id="age-group" className="select-box">
                    <option value="">Celebrant Age</option>
                    <option value="Child" >Child</option>
                    <option value="Teenager" >Teenager</option>
                    <option value="Adult" >Adult</option>
                </Field>

                <Field component="select" name="celebrantSex" className="select-box" >
                    <option value="" >Celebrant Sex</option>
                    <option value="Male" >Male</option>
                    <option value="Female" >Female</option>
                    <option value="Corperate" >Corperate</option>
                </Field>
            <p style={{color:"darkgray"}}><Field type="number" name="orderQuantity" placeholder="Quantity(1)" className="number-input" /> Quantity</p>
                <div>
                    <p style={{color:"darkgray"}}>Date of Ocassion</p>
                    <Field type="date" name="eventDate" className="date-input" id="event-date" />
                </div>
                <div>
                    <p style={{color:"darkgray"}}>Prefered collection date</p>
                    <Field type="date" name="collectionDate" className="date-input" id="event-date" />
                </div>
                <Field type="text" placeholder="Buyer's Fullname" name="buyerName" className="full-name" style={{fontSize:"0.8rem"}} />
                <Field type="tel" name="buyerNumber" placeholder="Buyer's Number" />
                <Field type="tel" name="buyerEmail" placeholder="Buyer's Email" />

            </div>
          
        </div>
    )
}

export default BuyerInfo