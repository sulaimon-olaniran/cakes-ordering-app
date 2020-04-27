import React from 'react'
import PaystackButton from 'react-paystack'

const key =  "pk_test_########################################"
const Paystack =() => {

    const callback = (response) => {
        console.log(response); // card charged successfully, get reference here
    }

    const close = () => {
        console.log("Payment closed");
    }

   const getReference = () => {
        //you can put any unique reference implementation code here
        let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

        for( let i=0; i < 15; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    return (
        <div>
        <p>
          <PaystackButton
            text="Make Payment"
            className="payButton"
            callback={callback}
            close={close}
            disabled={true} 
            embed={true} 
            reference={getReference()}
            email={"suzzwayne@gmail.com"}
            amount={5000}
            paystackkey={key}
            tag="button"
          />
        </p>
      </div>
    )
}

export default Paystack