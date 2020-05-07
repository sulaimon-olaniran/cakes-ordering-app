import React from 'react'

function EachImage({ image } ){
    console.log(image)

    return(
        <div className="slidecake-con" >
          <img src={image} alt="cake images" />
        </div>
    )
}

export default EachImage