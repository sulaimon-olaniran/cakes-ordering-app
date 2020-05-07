import React, { useContext } from 'react'
import CakesPage from './cakespage/CakesPage'
import { AppContext } from '../contexts/AppContext'


const Cakes = () => {
     const { cakes } = useContext(AppContext)

    return (
        <div>
          <CakesPage cakes={cakes} />
        </div>
    )
}

export default Cakes