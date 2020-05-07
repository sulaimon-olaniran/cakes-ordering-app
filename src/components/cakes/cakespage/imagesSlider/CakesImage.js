import React, { useState } from 'react'
import EachImage from './EachImage';
import './CakesImage.css'

function CakesImage({cakeImage}) {

    const [x, setX] = useState(0)

    const handleNext = () => {
        x === -100 * (cakeImage.length - 1) ? setX(0) : setX(x - 100);
    }

    const handlePrevious = () => {

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
            <div className="cakeslide-button-con"><button>«</button> <button onClick={handleNext}>»</button></div>
        </React.Fragment>
    )

}

export default CakesImage