import React from 'react'
import './PageSections.css'
import ShopName from './pageDesigns/ShopName'
import ShopMessage from './pageDesigns/ShopMessage'



const HomeAboutSection = () => {
     return (
          <section className="about-section">
               <ShopName />
               <ShopMessage />
          </section>
     )
}


export default HomeAboutSection