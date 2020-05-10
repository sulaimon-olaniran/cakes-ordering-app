import * as yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
 export const MainOrderValidation = yup.object().shape({
    cakeType: yup.string().required("Please Select a cake type"),

    otherCake: yup.string().when('cakeType', {
        is: "other",
        then: yup.string().required("What type of cake do you want?")
    }),

    cakeFill: yup.string().required("Please Select the cake filling"),

    otherFill: yup.string().when('cakeFill', {
        is: "other",
        then: yup.string().required("What cake fill do you want ?")
    }),

    cakeShape: yup.string().required("Please Select the cake shape"),

    otherShape: yup.string().when('cakeShape', {
        is: "other",
        then: yup.string().required("What's the shape of the cake ?")
    }),

    cakeFlavor: yup.string().required("Please Select the cake flavor"),

    otherFlavor: yup.string().when('cakeFlavor', {
        is: "other",
        then: yup.string().required("What type of cake flavor do you want ?")
    }),

    cakeIcing: yup.string().required("Please Select the Icing for the cake"),

    otherIcing: yup.string().when('cakeIcing', {
        is: "other",
        then: yup.string().required("What Icing do you want for the cake ?")
    }),

    buyerName: yup.string().required("Please Name of buyer is required"),
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


