import React, { useContext, useEffect } from 'react'
import CakesPage from './cakespage/CakesPage'
import { AppContext } from '../contexts/AppContext'
import { RingLoader } from "react-spinners"


const Cakes = () => {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  const { promiseInProgress, cakes, cakeErrors } = useContext(AppContext)

  return (
    <div>
      {promiseInProgress ?
        <div className="spinner-con">
        <RingLoader
          size={150}
          color={"darkblue"}
        /> 
        </div>
        :
        cakeErrors && cakeErrors ?
        <div>
         <h1>Connection Error</h1>
         <p>Please check your network connection and reload page</p>
        </div>
        :
        <CakesPage cakes={cakes} />
      }

    </div>
  )
}

export default Cakes