import { createContext, useContext, useState } from 'react'
import useDarkMode from './useDarkMode'


const ModeContext = createContext()


export default function ModeProvider({ children }){

    const [colorTheme, setTheme] = useDarkMode()
    const [loading, setLoading] = useState(false)
    

    function changeTheme(){
        setTheme(colorTheme)
    }

    const value = {
        colorTheme,
        changeTheme,
    }

    return(
        <ModeContext.Provider value={value}>
            { !loading && children }
            { loading && <h1>Loading</h1> }
        </ModeContext.Provider>
    )
}


export function useTheme(){
    return useContext(ModeContext);
}