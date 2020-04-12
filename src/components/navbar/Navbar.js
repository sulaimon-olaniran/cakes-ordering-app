import React from 'react'
import BurgerButton from './burgerNav/BurgerButton'
import './Navbar.css'



const Navbar = () => {
    return (
        <nav>
            <div className="logo-container">
                <h3>Page Logo</h3>
            </div>
            <div className="links-container">
                <ul>
                    <li>Products</li>
                    <li>Order</li>
                    <li>About</li>
                </ul>
            </div>


            <div className='burger-container'>
                <BurgerButton />
            </div>

        </nav>
    )
}

export default Navbar