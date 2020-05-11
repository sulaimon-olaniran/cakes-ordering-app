import React from 'react'
import BurgerButton from './burgerNav/BurgerButton'
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom'
import pagelogo from './pagelogo.png'



const Navbar = () => {
    return (
        <nav>
            <div className="logo-container">
              <Link to="/"> <img src={pagelogo} alt="Logo" /></Link> 
            </div>
            <div className="links-container">
                <ul>
                    <NavLink exact to='/' activeClassName="active-link">
                        <li>Home</li>
                    </NavLink>

                    <NavLink to='/payment'activeClassName="active-link" >
                        <li>Payment</li>
                    </NavLink>

                    <NavLink to='/cakes' activeClassName="active-link">
                        <li>Cakes</li>
                    </NavLink>

                    <NavLink to='/cupcakes' activeClassName="active-link">
                        <li>Cupcakes</li>
                    </NavLink>

                    <NavLink to='/order' activeClassName="active-link">
                        <li>Order</li>
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