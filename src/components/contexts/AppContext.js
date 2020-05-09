import React, { createContext, useState, useEffect } from 'react'
import { trackPromise, usePromiseTracker } from 'react-promise-tracker'
import { db } from '../../services/Firebase'

export const AppContext = createContext()


const AppContextProvider = (props) => {
    const { promiseInProgress } = usePromiseTracker()

    const [burgerLink, setBurgerLink] = useState(false)
    const [cakesLink, setCakesLink] = useState(false)
    const [cakes, setCakes] = useState(null)
    const [cupCakes, setCupCakes] = useState(null)
    const [cakeErrors, setCakeErrors] = useState(null)
    
    const getCakes = () => {
        trackPromise(
        db.collection('cakes')
            .get()
            .then(snapshot => {
                const cakes = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    cakes.push(data)
                })
                //console.log(cakes)
                setCakes(cakes)
            })
            .catch(error => setCakeErrors(error)))
    }
    const getCupCakes = () => {
        trackPromise(
        db.collection('cupcakes')
            .get()
            .then(snapshot => {
                const cupCakes = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    cupCakes.push(data)
                })
               // console.log(cupCakes)
                setCupCakes(cupCakes)
            })
            .catch(error => console.log(error)))
    }

    useEffect(() => {
        getCakes()
        getCupCakes()
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
            handleBurger: handleBurger, closeBurger: closeBurger, burgerLink, cupCakes, cakeErrors,
            handleCakeLink: handleCakeLink, cakesLink, getCakes: getCakes, cakes, promiseInProgress
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider