import { useState, useEffect } from "react"


export default function useDarkMode() {

    let defaultTheme = 'light'

    try{
        defaultTheme = localStorage['theme-blog-script']
    }catch(err){
        // console.log("Local Storage for Theme Set")
    }

    const [theme, setTheme] = useState(defaultTheme)
    const colorTheme = (theme === 'dark')? 'light': 'dark'

    useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove(colorTheme)
        root.classList.add(theme)

        //Local Storage
        localStorage.setItem('theme-blog-script', theme)
    }, [theme, colorTheme])

    return [colorTheme, setTheme]
}
