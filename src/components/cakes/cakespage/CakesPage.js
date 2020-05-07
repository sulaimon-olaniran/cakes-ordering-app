import React from 'react'
import './CakesPage.css'
import EachCake from "./EachCake"


const CakesPage = ({cakes}) => {

    return (
        <div className="cake-page-div">
        <section className="cake-page-con">
            {
               cakes && cakes.map((cake, i) => {
                    return (
                   
                        <EachCake  key={i} cake={cake} />
                    
                    )
                })
            }
        </section>
        </div>
    )
}

export default CakesPage