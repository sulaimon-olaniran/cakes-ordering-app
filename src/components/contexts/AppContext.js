import React, { createContext, useState } from 'react'

export const AppContext = createContext()


const AppContextProvider = (props) => {
    const [burgerLink, setBurgerLink] = useState(false)

    
    const closeBurger = () => {
        setBurgerLink(false)
    }

    const handleBurger = () => {
        setBurgerLink(!burgerLink)
    }
    return (
        <AppContext.Provider value={{
            handleBurger: handleBurger, closeBurger:closeBurger, burgerLink
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider