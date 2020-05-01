import React, { useContext, useState } from 'react'
import { AppContext } from '../../contexts/AppContext'
import { NavLink } from 'react-router-dom'

const BurgerLinks = () => {
    const { burgerLink, closeBurger, handleCakeLink, cakesLink } = useContext(AppContext)
    
    const cakeClass = cakesLink ? "cakes-link-con" : "hide-cake-link"

    let burgerClass = "link-drawer"

    if (burgerLink === true) {
        burgerClass = "link-drawer open"
    }
    return (
        <nav className={burgerClass} >
            <div className="burger-button">
                <button onClick={closeBurger}>X</button>
            </div>

            <ul className="burger-link-con">
                <NavLink to='/' onClick={closeBurger}>
                    <li>Home</li>
                </NavLink>

                <NavLink to='/payment' onClick={closeBurger}>
                    <li>Payment</li>
                </NavLink> 

                <li onClick={handleCakeLink}>Products </li>
                    <ul className={cakeClass} >
                        <NavLink to='/cakes' onClick={closeBurger}>
                            <li>View Cakes</li>
                        </NavLink>
                        <NavLink to='/cupcakes' onClick={closeBurger}>
                            <li>View Cupcakes</li>
                        </NavLink>

                    </ul>
               
                <NavLink to='/order' onClick={closeBurger}>
                    <li>Create Order</li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default BurgerLinks