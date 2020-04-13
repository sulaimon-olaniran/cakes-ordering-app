import React, { useContext } from 'react'
import cake_icon from './cake_icon.png'
import { AppContext } from '../../contexts/AppContext'


const BurgerButton = () => {
    const { handleBurger } = useContext(AppContext)

    return <img src={cake_icon} alt="Menu" onClick={handleBurger} />
}

export default BurgerButton