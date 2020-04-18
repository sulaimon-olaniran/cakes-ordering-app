import React, {useState, useEffect} from 'react'
import EachSlide from './EachSlide';
import './Slider.css'

function ImgSlider({cakeImage}){
    
   const [images, setImages] = useState(['S', 'U', 'L', 'A', 'I', 'M', 'O', 'N'])
   const [x, setX] = useState(0)

   useEffect(() => {
    const interval = setInterval(() => {
      x === -100 * (images.length - 3) ? setX(0) :  setX(x - 100);
    }, 2000);

    return () => clearInterval(interval);
  }, [x, images.length]);

  return(
      <div className="slider-container">
        {
            images.map((image, index) =>{
                return(
                    <div key={index} className="img-slider"
                     style={{transform : `translateX(${x}%)`}}
                    >
                        <EachSlide text={image} cakeImage ={cakeImage}  />
                    </div>
                )
            })
        }
      </div>
  )

}

export default ImgSlider