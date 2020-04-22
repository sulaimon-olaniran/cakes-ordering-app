import React from 'react'
import { Field } from 'formik'

const CakeIcing = () => {
   return (
    <div className="cake-field">
    <div className="cake-field-title">
        <h3>choose Cake Icing</h3>
    </div>
    <div className="cake-selection">
        <Field type="radio" name="cakeIcing" id="butter-icing" value="Buttercream" />
        <label htmlFor="butter-icing">Buttercream</label><br />

        <Field type="radio" name="cakeIcing" id="creamcheese-icing" value="Cream cheese" />
        <label htmlFor="creamcheese-icing">Cream cheese</label><br />

        <Field type="radio" name="cakeIcing" id="vanilla-icing" value="Vanilla" />
        <label htmlFor="vanilla-icing">Vanilla</label><br />

        <Field type="radio" name="cakeIcing" id="chocolate-icing" value="Chocolate" />
        <label htmlFor="chocolate-icing">Chocolate</label><br />

        <Field type="radio" name="cakeIcing" id="fondant-icing" value="Fondant" />
        <label htmlFor="fondant-icing">Fondant</label><br />

        <Field type="radio" name="cakeIcing" id="frosting-icing" value="Frosting" />
        <label htmlFor="frosting-icing">Frosting</label><br />

        <span >
            <Field type="radio" name="cakeIcing" id="other-icing" value="other" />
            <label htmlFor="other-icing" >Other Icings</label><br />
            <Field placeholder="Others" name="otherIcing" id="other" type="text" />
        </span>

    </div>
</div>
   )
}

export default CakeIcing