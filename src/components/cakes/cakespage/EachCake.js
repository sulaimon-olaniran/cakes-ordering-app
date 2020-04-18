import React from 'react'
import eachcake from './eachcake.jpg'



const EachCake = () => {
    return (
        <div className="each-cake-con">

            <div className="image-con">
                <img src={eachcake} alt="cake" />
            </div>

            <div className="cake-details-con">
                <h4>Cake's Name</h4>
                <p>Cake's Price</p>
                <button>Buy Cake</button>
            </div>

        </div>
    )
}

export default EachCake