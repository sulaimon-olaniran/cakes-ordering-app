import React from 'react'
import { Field } from 'formik'


const CakeShapes = () => {
    return (
        <div className="cake-field">
            <div className="cake-field-title">
                <h3>choose cake shape</h3>
            </div>
            <div className="cake-selection">
                <Field type="radio" name="cakeShape" id="square" value="Square"/>
                <label htmlFor="square">Square</label><br />

                <Field type="radio" name="cakeShape" id="circle" value="Circle" />
                <label htmlFor="circle">Circle</label><br />

                <Field type="radio" name="cakeShape" id="rectangle" value="Rectangle" />
                <label htmlFor="rectangle">Rectangle</label><br />

                <Field type="radio" name="cakeShape" id="cone" value="Cone" />
                <label htmlFor="cone">Cone</label><br />

                <Field type="radio" name="cakeShape" id="heart" value="Heart" />
                <label htmlFor="heart">Heart</label><br />

                <span >
                    <Field type="radio" name="cakeShape" id="other-shape" value="other" />
                    <label htmlFor="other-shape" >other shapes</label><br />
                    <Field placeholder="Others" name="otherShape" id="other" type="text" />

                </span>

            </div>
        </div>
    )
}

export default CakeShapes