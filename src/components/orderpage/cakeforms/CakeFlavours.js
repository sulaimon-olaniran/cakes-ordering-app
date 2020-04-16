import React from 'react'
import { Field } from 'formik'


const CakeFlavours = () => {
    return (
        <div className="cake-field">
            <div className="cake-field-title">
                <h3>choose Cake Flavor</h3>
            </div>
            <div className="cake-selection">
                <Field type="radio" name="cakeFlavor" id="vanilla-flavor" value="Vanilla" />
                <label htmlFor="vanilla-flavor">Vanilla</label><br />

                <Field type="radio" name="cakeFlavor" id="orange-flavor" value="Orange" />
                <label htmlFor="orange-flavor">Orange</label><br />

                <Field type="radio" name="cakeFlavor" id="chocolate-chips" value="Chocolate Chips" />
                <label htmlFor="chocolate-chips">Chocolate Chips</label><br />

                <Field type="radio" name="cakeFlavor" id="lemon-flavor" value="Lemon" />
                <label htmlFor="lemon-flavor">Lemon</label><br />

                <Field type="radio" name="cakeFlavor" id="dried-fruits" value="Dried fruits" />
                <label htmlFor="dried-fruits">Dried fruits</label><br />

                <Field type="radio" name="cakeFlavor" id="almond-flavor" value="Almond" />
                <label htmlFor="almond-flavor">Almond</label><br />

                <Field type="radio" name="cakeFlavor" id="pistachio" value="Pistachio" />
                <label htmlFor="pistachio">Pistachio</label><br />


                <span >
                    <Field type="radio" name="cakeFlavor" id="other-flavor" value="other" />
                    <label htmlFor="other-flavor" >Other Flavors</label><br />
                    <Field placeholder="Others" name="otherFlavor" id="other" type="text" />

                </span>

            </div>
        </div>
    )
}


export default CakeFlavours