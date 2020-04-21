import React from 'react'
import { withFormik, Form } from 'formik'
import DeliveryType from '../cakeforms/DeliveryType'
import AddedInfo from './AddedInfo'
import './ReadyMade.css'
//import Yup from 'yup'

const ReadyMadeForm = ({ values, location }) => {
    const {image, name, price, size } = location.state

    return (
        <div className="form-container">
            <div className="cake-info">
                 <div className="cake-info-img">
                  <img src={image} alt="cake" />
                </div>
                <h3>{name}</h3>
            </div>
            <Form className="form-field">
                 <AddedInfo size={size}/>
                 <DeliveryType />

                <div className="button-div">
                  <button type="submit">Place Order</button>
                </div>
            </Form>

        </div>
    )

}



const FormikReadyMadeOrder = withFormik({
    mapPropsToValues({location}) {
        return {
            cakeName : location.state.name ,
            fullName: "",
            celebrantSex: "",
            ocassion: "",
            celebrantAge: "",
            specialRequest: "",
            cakeMessage: "",
            cakeSize: "",
            eventDate: "",
            deliveryType: "",
            city: "",
            state: "",
            postalCode :"",
            phoneNumber :"",
            secondNumber : ""

        }
    },

    handleSubmit(values) {
        console.log(values)
    }

})(ReadyMadeForm)

export default FormikReadyMadeOrder

