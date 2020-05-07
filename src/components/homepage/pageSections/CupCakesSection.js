import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './PageSections.css'
import ImgSlider from './slider/ImgSlider'
import { AppContext } from '../../contexts/AppContext'


const CupCakesSection = () => {
      const { cupCakes } = useContext(AppContext)
    return (
        <section className="cupcakes-section">
            <div>
                <h2>Lovely Cupcakes available</h2>
                <p>Click view more to see more cakes and Order</p>
            </div>
            <ImgSlider cakes={cupCakes} />
            <NavLink to='/cupcakes'>
                <button>view more</button>
            </NavLink>
        </section>
    )
}

export default CupCakesSection