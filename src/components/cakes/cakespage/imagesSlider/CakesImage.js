import React, { useState } from 'react'
import EachImage from './EachImage';
import './CakesImage.css'

function CakesImage({cakeImage}) {

    const [x, setX] = useState(0)

    const handleNext = () => {
        x === -100 * (cakeImage.length - 1) ? setX(0) : setX(x - 100);
    }

    const buttonClass = cakeImage.length > 1 ? "cakeslide-button-con" : "hide-button-con"

    const handlePrevious = () => {
        x === 0 ?  setX(-100 * (cakeImage.length - 1)) : setX(x + 100);
    }

    return (
        <React.Fragment>
            <div className="cakeslide-con">

                {
                    cakeImage && cakeImage.map((image, index) => {
                        return (
                            <div key={index} className="eachcake-con"
                                style={{ transform: `translateX(${x}%)` }}
                            >
                                <EachImage image={image} />
                            </div>

                        )
                    })
                }


            </div>
            <div className={buttonClass}><button onClick={handlePrevious}>«</button> <button onClick={handleNext}>»</button></div>
        </React.Fragment>
    )

}

export default CakesImage