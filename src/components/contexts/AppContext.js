import React, { createContext, useState, useEffect } from 'react'
import { db } from '../../services/Firebase'

export const AppContext = createContext()


const AppContextProvider = (props) => {
    const [burgerLink, setBurgerLink] = useState(false)
    const [cakesLink, setCakesLink] = useState(false)
    const [cakeName, setCakeName] = useState([])
    const [cakeImage, setCakeImage] = useState([])
    const [cakePrice, setCakePrice] = useState([])
    const [cakes, setCakes] = useState(null)
    
    const getCakes = () => {
        db.collection('cakes')
            .get()
            .then(snapshot => {
                const cakes = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    cakes.push(data)
                })
                console.log(cakes)
                setCakes(cakes)
                setCakeName(cakes.name)
                setCakeImage(cakes.imageUrl)
                setCakePrice(cakes.priceList)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getCakes()
    }, [])

    const handleCakeLink = () => {
        setCakesLink(!cakesLink)
    }
    const closeBurger = () => {
        setBurgerLink(false)
        setCakesLink(false)
    }

    const handleBurger = () => {
        setBurgerLink(!burgerLink)
    }




    return (
        <AppContext.Provider value={{
            handleBurger: handleBurger, closeBurger: closeBurger, burgerLink, cakeImage, cakePrice,
            handleCakeLink: handleCakeLink, cakesLink, cakeName, getCakes: getCakes, cakes
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider