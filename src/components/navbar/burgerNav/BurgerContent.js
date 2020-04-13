import React, { useContext } from 'react'
import './Burger.css'
import BurgerLinks from './BurgerLinks'
import BackDrop from './BackDrop'
import { AppContext } from '../../contexts/AppContext'


const BurgerContent = () => {
    const { burgerLink } = useContext(AppContext)
    
   return (
    <div>{
        burgerLink ?
            <BackDrop />
            :
            null
    }
        <BurgerLinks />
    </div>
   )
}

export default BurgerContent