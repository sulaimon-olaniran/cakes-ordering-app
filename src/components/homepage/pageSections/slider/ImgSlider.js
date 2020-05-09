import React, {useState, useEffect} from 'react'
import EachSlide from './EachSlide';
import './Slider.css'

function ImgSlider({ cakes }){
   const [x, setX] = useState(0)

   useEffect(() => {
    const interval = setInterval(() => {
      x === -100 * (cakes && cakes.length - 1) ? setX(0) :  setX(x - 100);
    }, 2000);

    return () => clearInterval(interval);
  }, [x, cakes ]);

  return(
      <div className="slider-container">
        {
            cakes && cakes.map((cake, index) =>{
                return(
                    <div key={index} className="img-slider"
                     style={{transform : `translateX(${x}%)`}}
                    >
                        <EachSlide  cakeImage ={cake.imagesUrl[0]}  />
                    </div>
                )
            })
        }
      </div>
  )

}

export default ImgSlider