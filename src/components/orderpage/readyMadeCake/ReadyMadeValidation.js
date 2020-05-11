import * as yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
 export const ReadyMadeValidation = yup.object().shape({
    buyerName: yup.string().required("Please Name of buyer is required"),
    buyerEmail : yup.string()
    .email('Invalid email')
    .required('Required') ,
    buyerNumber:  yup.string().matches(phoneRegExp, "enter a valid buyer's number").min(11).max(11).required("Buyer's phone number is required"),
    celebrantSex: yup.string().required("Sex of celebrant is required"),
    celebrantAge: yup.string().required("Choose an age group for the celebrant"),
    ocassion: yup.string().required("Please tell us the ocassion"),
    cakeColor: yup.string().required("What is your prefered cake colour ?"),
    cakeMessage: yup.string().required("Message on cake").min(10, "cake message too short").max(25, "cake message too long"),
    cakeSize: yup.string().required("Please Select the cake Size"),
    eventDate: yup.date().min(new Date(), "please select a valid event date").required("Date of the Ocassion ?"),
    collectionDate: yup.date().min(new Date(), "select a valid collection date").required("when do you want your cake?"),
    deliveryType: yup.string().required("How do you want your cake delivered ?"),
    city: yup.string().when('deliveryType', {
        is: "Delivery",
        then: yup.string().required("What City do you want your cake delivered ?")
    }),
    state: yup.string().when('deliveryType', {
        is: "Delivery",
        then: yup.string().required("What State do you want your cake delivered ?")
    }),
    phoneNumber: yup.string().when('deliveryType', {
        is: "Delivery",
        then: yup.string().matches(phoneRegExp, 'enter a valid recipient number').min(11).max(11).required("phone number of recipient required")
    }),

    secondNumber: yup.string().when('deliveryType', {
        is: "Delivery",
        then: yup.string().matches(phoneRegExp, 'enter a valid second number').min(11).max(11).required("additional recipient number required")
    }),
   

})


