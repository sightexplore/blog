import { useEffect } from "react"


export default function useHideScroller(classVar,upper,lower) {

    let getId = null

    if (typeof window === 'object') {
        getId = document.getElementById(classVar)
    }
    

    useEffect(() => {
        if(getId){
            window.addEventListener("scroll", listenToScroll);
            return () => window.removeEventListener("scroll", listenToScroll); 
        }
    }, [getId])


    const listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll >= upper && winScroll <= lower) {
            getId.style.opacity = `${((lower-winScroll)/lower)}`
            getId.style.display = `flex`
        }else{
            getId.style.opacity = `0`
            getId.style.display = `none`
        }
        // console.log(getId.style.opacity)
    };
}