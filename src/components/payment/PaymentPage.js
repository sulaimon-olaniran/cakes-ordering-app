import React from 'react'
import Paystack from './Paystack'
import './Payment.css'
import { withFormik, Form, Field } from 'formik'
import * as yup from 'yup'


const PaymentPage = ({ values, errors, touched }) => {
    const { buyerName, buyerEmail, buyerNumber, orderCode, amount } = values
    return (
        <div className="payment-con-wrapper">
        <div className="payment-con">
            <div className="bank-account">
                <h3>Pay to bank account</h3>
                <p>Bank <b>:</b> Guarantee Trust Bank</p>
                <p>Account Num <b>:</b> 0543453234</p>
                <p>Account Name <b>:</b> Leemahs Treats</p>
            </div>
        <hr/>
            <div className="payment-form-con">

                <ul className="instructions">
                    <h3>Pay With Paystack</h3>
                    <li>Enter valid email to receive payment receipt (optional)</li>
                    <li>Enter the 75% agreed amount to pay</li>
                    <li>Full Name should be same as Buyer's name</li>
                    <li>Please enter the code of the order</li>
                </ul>

                <Form className="payment-form">
                   <div className="payment-field"> <Field type="text" name="buyerName" placeholder="Full Name"  />
                    {touched.buyerName && errors.buyerName && <small>{errors.buyerName}</small>}
                    </div>
                    <Field type="email" name="buyerEmail" placeholder="Email"  />
                    <Field type="number" name="buyerNumber" placeholder="Phone Number.."  />
                    <div className="payment-field">
                    <Field type="text" name="orderCode" placeholder="Order Code.."  />
                    {touched.orderCode && errors.orderCode && <small>{errors.orderCode}</small>}
                    </div>
                    <div className="payment-field-money">
                    <p>&#8358;<Field type="number" name="amount" placeholder="Amount to pay" /></p>
                    {touched.amount && errors.amount && <small>{errors.amount}</small>}
                    </div>
                </Form>
            </div>
            <Paystack buyer={buyerName} number={buyerNumber} email={buyerEmail} code={orderCode} amount={amount} />
        </div>
        </div>
    )
}


const FormikPaymentPage = withFormik({
    mapPropsToValues() {
        return {
            buyerNumber: "",
            buyerName: "",
            buyerEmail: "",
            amount: 0 || "",
            orderCode: ""
        }
    },
    validationSchema: yup.object().shape({
        buyerName: yup.string().required("Buyer Full Name is Required"),
        orderCode: yup.string().required("Order code is required"),
        amount: yup.string().required("Payment Amount is Required")

    }),

    handleSubmit(values) {
        console.log(values)
    }

})(PaymentPage)

export default FormikPaymentPage
