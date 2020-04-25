import React, { createContext, useState } from 'react'

export const AppContext = createContext()


const AppContextProvider = (props) => {
    const [burgerLink, setBurgerLink] = useState(false)
    const [cakesLink, setCakesLink] = useState(false)

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
            handleBurger: handleBurger, closeBurger:closeBurger, burgerLink,
            handleCakeLink:handleCakeLink, cakesLink
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider