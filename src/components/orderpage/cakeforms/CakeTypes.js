import React from 'react'
import { Field } from 'formik'

const CakeTypes = () => {
    return (
        <div className="cake-field">
            <div className="cake-field-title">
                <h3>choose a cake</h3>
            </div>
            <div className="cake-selection">
                <Field type="radio" name="cakeType" id="yellow" value="yellow butter cake"
                />
                <label htmlFor="yellow">Yellow Butter Cake</label><br />

                <Field type="radio" name="cakeType" id="pound" value="pound cake" />
                <label htmlFor="pound">Pound Cake</label><br />

                <Field type="radio" name="cakeType" id="carrot" value="carrot cake" />
                <label htmlFor="carrot">Carrot Cake</label><br />

                <Field type="radio" name="cakeType" id="genoise" value="Genoise cake" />
                <label htmlFor="genoise">Genoise Cake</label><br />

                <Field type="radio" name="cakeType" id="confetti" value="Confetti cake" />
                <label htmlFor="confetti">Confetti Cake</label><br />

                <Field type="radio" name="cakeType" id="chocolateCake" value="chocolate cake" />
                <label htmlFor="chocolateCake">Chocolate Cake</label><br />
                <span >
                    <Field type="radio" name="cakeType" id="other-type" value="other" />
                    <label htmlFor="other-type" >other options </label><br />
                    <Field placeholder="Others" name="otherCake" id="other" type="text" />

                </span>

            </div>
        </div>
    )
}

export default CakeTypes