import React, { useState } from 'react'
import './CakesPage.css'
import EachCake from "./EachCake"


const CakesPage = () => {
    const [cakes, setCakes] = useState(["one", "two", "three", "four", "five", "six", "seven", "eight"])

    return (
        <div className="cake-page-con">
            {
                cakes.map((cake, i) => {
                    return (
                   
                        <EachCake  key={i} />
                    
                    )
                })
            }
        </div>
    )
}

export default CakesPage