import React from 'react'
import { NavLink } from 'react-router-dom'
import './PageSections.css'
import ImgSlider from './slider/ImgSlider'
import cupcake_image from './cupcake_image.jpg'


const CupCakesSection = () => {
    return (
        <section className="cupcakes-section">
            <div>
                <h2>Lovely Cupcakes available</h2>
                <p>Click view more to see more cakes and Order</p>
            </div>
            <ImgSlider cakeImage={cupcake_image} />
            <NavLink to='/cupcakes'>
                <button>view more</button>
            </NavLink>
        </section>
    )
}

export default CupCakesSection