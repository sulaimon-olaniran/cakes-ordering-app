import React from 'react'
import Paystack from './Paystack'
import './Payment.css'
import { withFormik, Form, Field } from 'formik'
import * as yup from 'yup'


const PaymentPage = ({values, errors, touched}) => {
    const {buyerName, buyerEmail, buyerNumber, orderCode, amount} = values
    return (
        <div className="payment-con">
            <div className="instructions">
                <h3>Please Note</h3>
                <p>Enter your valid email to receive payment receipt (optional)</p>
                <p>Enter the 75% agreed amount to pay</p>
                <p>Full Name should be same name of buyer that placed order for cake</p>
                <p>Please enter the correct order-code</p>
            </div>
            <div className="payment-form-con">
                 <Form className="payment-form">
                     <Field type="text"  name="buyerName" placeholder="Full Name" className="payment-field"/>
                     {touched.buyerName && errors.buyerName && <small>{errors.buyerName}</small> }
                
                     <Field type="email" name="buyerEmail" placeholder="Email" className="payment-field"/>
                     <Field type="number" name="buyerNumber" placeholder="Phone Number.." className="payment-field"/>
                     <Field type="text" name="orderCode" placeholder="Order Code.." className="payment-field"/>
                     {touched.orderCode && errors.orderCode && <small>{errors.orderCode}</small> }
                     <p>&#8358; <Field type="number" name="amount" placeholder="Amount to pay" className="payment-field-money"/></p>
                     {touched.amount && errors.amount && <small>{errors.amount}</small> }
                 </Form>
            </div>
            <Paystack buyer={buyerName} number={buyerNumber} email={buyerEmail} code={orderCode} amount={amount} />
        </div>
    )
}


const FormikPaymentPage = withFormik({
    mapPropsToValues() {
        return {
            buyerNumber: "",
            buyerName : "",
            buyerEmail : "",
            amount : 0 || "",
            orderCode :""
        }
    },
    validationSchema:yup.object().shape({
        buyerName: yup.string().required("Buyer Full Name is Required"),
        orderCode: yup.string().required("Order code is required"),
        amout: yup.string().required("Payment Amount is Required")

    }),

    handleSubmit(values) {
        console.log(values)
    }

})(PaymentPage)

export default FormikPaymentPage
