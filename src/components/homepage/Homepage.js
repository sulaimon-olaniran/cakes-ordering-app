import React, { useEffect } from 'react'
import './Homepage.css'
import HomeAboutSection from './pageSections/AboutSection'
import CakesSection from './pageSections/CakesSection'
import CupCakesSection from './pageSections/CupCakesSection'



const Homepage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <main className="home-container">
            <HomeAboutSection />
            <CakesSection />
            <CupCakesSection />
        </main>
    )
}


export default Homepage