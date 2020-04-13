import React from 'react'
import './PageSections.css'
import { NavLink } from 'react-router-dom'

const CakesSection = () => {
    return (

        <section className="cakes-section">
            <h2>Cakes Sections</h2>
            <NavLink to='/cakes'>
                <button>view more cakes</button>
            </NavLink>
        </section>
    )

}


export default CakesSection