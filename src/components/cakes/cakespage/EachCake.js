import React from 'react'
import { NavLink } from 'react-router-dom'
import CakesImage from './imagesSlider/CakesImage'



const EachCake = ({ cake }) => {
    // console.log(cake.priceList.price)
    const prices = []
    const sizes = []

    const len = cake.priceList.length;

    for (var i = 0; i < len; i++) {
        prices.push(cake.priceList[i].price)
        sizes.push(cake.priceList[i].size)
    }

    const sortPrice = () => {
        return prices.sort(function (a, b) { return a - b; });
    }
    const sortSize = () => {
        return sizes.sort(function (a, b) { return a - b; });
    }
    const sortedSizes = sortSize()
    console.log(sortedSizes)
    const sortedPrices = sortPrice()

    return (
        <div className="each-cake-con">

            <div className="image-con">
                <CakesImage cakeImage={cake.imagesUrl} />
            </div>


            <div className="cake-details-con">
                <h4>{cake.name}</h4>
                <p>{sortedPrices[0]} - {sortedPrices[len - 1]}</p>

                <NavLink
                    to={{
                        pathname: '/buycake',
                        state: {
                            image: cake.imagesUrl[0],
                            name: cake.name,
                            price: sortedPrices,
                            size: sortedSizes
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