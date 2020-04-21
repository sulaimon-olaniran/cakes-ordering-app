import React from 'react'

const TestFormPage = () => {

    return (
        <form name="userName" method="Post" data-netlify="true" data-netlify-recaptcha="true">
            <input type="text" name="firstName" placeholder="first name" />
            <input type ="text" name="otherName" placeholder="other name" />
            <input type="text" name="lastName" placeholder="last name" />
             
             <div data-netlify-recaptcha="true" ></div>
            <input type="submit" value="send names" />
        </form>
    )
}

export default TestFormPage