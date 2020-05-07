import React, { useContext } from 'react'
import './PageSections.css'
import { NavLink } from 'react-router-dom'
import ImgSlider from './slider/ImgSlider'
import { AppContext } from '../../contexts/AppContext'

const CakesSection = () => {
   const { cakes } =  useContext(AppContext)
   console.log(cakes )
    return (

        <section className="cakes-section">
            <div>
                <h2>Some of the best Cakes</h2>
                <p>Click view more to see more cakes and Order</p>
            </div>
            <ImgSlider cakes={cakes} />
            <NavLink to='/cakes' className="button-link-con">

                <button>view more</button>
            </NavLink>
        </section>
    )

}


export default CakesSection