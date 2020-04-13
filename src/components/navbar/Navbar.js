import React from 'react'
import BurgerButton from './burgerNav/BurgerButton'
import './Navbar.css'
import { NavLink } from 'react-router-dom'



const Navbar = () => {
    return (
        <nav>
            <div className="logo-container">
                <h3>Page Logo</h3>
            </div>
            <div className="links-container">
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
            </div>


            <div className='burger-container'>
                <BurgerButton />
            </div>

        </nav>
    )
}

export default Navbar