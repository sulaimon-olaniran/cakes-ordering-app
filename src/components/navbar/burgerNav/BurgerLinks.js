import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import { NavLink } from 'react-router-dom'

const BurgerLinks = () => {
    const { burgerLink, closeBurger } = useContext(AppContext)

    let burgerClass = "link-drawer"

    if (burgerLink === true) {
        burgerClass = "link-drawer open"
    }
    return (
        <nav className={burgerClass} >
            <button onClick={closeBurger}>close me</button>
            <ul>
                <NavLink to='/products'>
                    <li>Products</li>
                </NavLink>

                <NavLink to='/order'>
                    <li>Order</li>
                </NavLink>

                <NavLink to='/about'>
                    <li>About</li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default BurgerLinks