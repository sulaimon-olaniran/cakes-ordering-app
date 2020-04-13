import React from 'react'
import { NavLink } from 'react-router-dom'
import './PageSections.css'


const CupCakesSection = () => {
    return (
        <section className="cupcakes-section">
            <h1>Cup Cakes</h1>
             <NavLink to='/cupcakes'>
                 <button>view more cupcakes</button>
             </NavLink>
        </section>
    )
}

export default CupCakesSection