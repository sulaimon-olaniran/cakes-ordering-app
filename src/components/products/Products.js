import React from 'react'
import { NavLink } from 'react-router-dom'

const Products = () => {
    return (
        <div>
            <h1>Hello From Products Page</h1>
            <div>
                <h3>cakes</h3>
                <NavLink to='/cakes'>
                    <button>view cakes</button>
                </NavLink>
            </div>
            <div>
                <h3>cup cakes</h3>
                <NavLink to='/cupcakes'>
                    <button>view cupcakes</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Products