import React from 'react'
import './PageSections.css'
import { NavLink } from 'react-router-dom'
import ImgSlider from './slider/ImgSlider'
import cake_image from './cake_image.jpg'

const CakesSection = () => {
    return (

        <section className="cakes-section">
            <div>
                <h2>Some of the best Cakes</h2>
                <p>Click view more to see more cakes and Order</p>
            </div>
            <ImgSlider cakeImage={cake_image} />
            <NavLink to='/cakes' className="button-link-con">

                <button>view more</button>
            </NavLink>
        </section>
    )

}


export default CakesSection