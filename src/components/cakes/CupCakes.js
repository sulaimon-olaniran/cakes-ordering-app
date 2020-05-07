import React, { useContext } from 'react'
import CakesPage from './cakespage/CakesPage'
import { AppContext } from '../contexts/AppContext'
import { RingLoader } from "react-spinners"


const CupCakes = () => {
       const { cupCakes, promiseInProgress } =  useContext(AppContext)
     return (
        <div>
      { promiseInProgress ?
         <div className="spinner-con">

         <RingLoader
           size={150}
           color={"darkblue"}
         /> 
         </div>
         :
        <CakesPage cakes={cupCakes} />
      }
      </div>
     )
}

export default CupCakes