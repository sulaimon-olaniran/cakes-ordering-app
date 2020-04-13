import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

const BackDrop = () => {
    const { closeBurger } = useContext(AppContext)
    return <div className="back-drop"  onClick={closeBurger} />
    
}

export default BackDrop