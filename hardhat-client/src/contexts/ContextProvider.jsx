import React, { createContext, useContext, useState } from 'react'

const Provider = createContext()

const initialState = {
    collection: false,
    notification: false,
    profile: false,
    themeSettings: false,
}

export const ContextProvider = ({children}) => {
    const [currentColor, setCurrentColor] = useState('#FB9678')
    const [currentMode, setCurrentMode] = useState('Light')
    const [isClicked, setIsClicked] = useState(initialState)

    const setColor = (color) => {
        setCurrentColor(color)
    }

    const setMode = (mode) => {
        setCurrentMode(mode)
    }

    const handleClick = (clicked) => {
        setIsClicked({...initialState,[clicked]: true})
    }

    const handleUnclick = (clicked) => {
        setIsClicked({...initialState,[clicked]: false})
    }
    
    return (
        <Provider.Provider value={{currentColor, currentMode, isClicked, setColor, setMode, handleClick, handleUnclick}}>
            {children}
        </Provider.Provider>
    )
}

export const useProviderContext = () => useContext(Provider)
