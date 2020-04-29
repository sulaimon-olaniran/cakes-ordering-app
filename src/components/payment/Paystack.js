import React from 'react'
import './Payment.css'
import PaystackButton from 'react-paystack'

const key = "pk_test_41ee8583da081526072608e37e6daff1dd0b9cec"
const Paystack = ({buyer, number, email, code, amount}) => {
    const disabled = buyer === "" || code === "" ||amount === "" ? true : false
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

        for (let i = 0; i < 15; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    
    return (

        <div>

            <p>
                <PaystackButton
                    metadata={{
                       "custom_fields": [
                            {
                                "display_name" : "Mobile Number",
                                "variable_name" : "mobile_number",
                                "value" : number
                            },
                        
                            {
                                "display_name" : "Buyer Name",
                                "variable_name" : "buyer_name",
                                "value" : buyer
                            }, 
                            {
                                "display_name" : "Order Code",
                                "variable_name" : "order_code",
                                "value" : code
                            },
                        ]
                    }}
                    text="Pay with Paystack"
                    className="payButton"
                    callback={callback}
                    close={close}
                    disabled={disabled}
                    embed={false}
                    reference={getReference()}
                    email={email}
                    amount={amount * 100}
                    paystackkey={key}
                    tag="button"
                />
            </p>
        </div>
    )
}

export default Paystack




/*
 metadata= {{
                    custom_fields: [
                        {
                            display_name: "Mobile Number",
                            variable_name: "mobile_number",
                            value: "+2348012345678" //customer's mobile number
                        }
                    ],
                    custom_fields: [
                        {
                            display_name: "First Name",
                            variable_name: "first_name",
                            value: "+2348012345678"
                        }
                    ]
                }}
*/