import React from 'react'

function EachSlide( { cakeImage }){

    return(
        <div className="slide-img" >
        <img src={cakeImage} alt="cakes" />
        </div>
    )
}

export default EachSlide