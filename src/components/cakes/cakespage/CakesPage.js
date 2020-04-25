import React, { useState } from 'react'
import './CakesPage.css'
import EachCake from "./EachCake"


const CakesPage = () => {
    const [cakes, setCakes] = useState(["one", "two", "three", "four", "five", "six", "seven", "eight"])

    return (
        <div className="cake-page-div">
        <section className="cake-page-con">
            {
                cakes.map((cake, i) => {
                    return (
                   
                        <EachCake  key={i} />
                    
                    )
                })
            }
        </section>
        </div>
    )
}

export default CakesPage