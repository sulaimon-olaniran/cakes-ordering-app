import React from 'react'
import eachcake from './eachcake.jpg'
import { NavLink } from 'react-router-dom'



const EachCake = () => {
    return (
        <div className="each-cake-con">

            <div className="image-con">
                <img src={eachcake} alt="cake" />
            </div>

            <div className="cake-details-con">
                <h4>Cake's Name</h4>
                <p>Cake's Price</p>
                <NavLink
                    to={{
                        pathname: '/buycake',
                        state: {
                            image :"https://picsum.photos/id/152/200/300",
                            name : "Cake's Name",
                            price : "Cake's Price",
                            size : [12, 14, 16, 20]
                        }
                    }
                    }
                >
                    <button>Buy Cake</button>
                </NavLink>
            </div>

        </div>
    )
}

export default EachCake