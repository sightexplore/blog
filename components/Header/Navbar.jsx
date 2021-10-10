import Link from 'next/link'
import {Github, Instagram, Facebook, Youtube, SunLight, MoonDark} from '../MediaIcon'
import useDarkMode from '../../hooks/useDarkMode'
import useHideScroller from '../../hooks/useHideScroller'



export default function Navbar() {

  const [colorTheme, setTheme] = useDarkMode()
  useHideScroller("nav-hide",0,100)

    return (
      <div className="text-gray-700 dark:text-gray-200 ">

        <nav id="nav-hide" className="fixed top-0 left-0 right-0 px-4 py-2 flex flex-col sm:flex-row sm:px-12 sm:py-5">


          <div className="flex flex-row flex-initial font-sans text-3xl font-light">
            <div className="">
              <Link href="/"><a>Sight Explore</a></Link>
            </div>
          </div>


          <hr className="sm:hidden mx-5 my-2 border dark:border-opacity-25 border-gray-700 dark:border-gray-200"  />


          <div className="flex flex-1">

            <div className="flex-1 my-auto sm:flex sm:justify-end flex flex-wrap font-light items-center">
              <Link href="/"><a className="sm:mr-6 mr-4 antialiased sm:text-base text-xs">Home</a></Link>
              <Link href="/about"><a className="sm:mr-6 mr-4 antialiased sm:text-base text-xs">About</a></Link>
              <Link href="/blog"><a className="sm:mr-6 mr-4 antialiased sm:text-base text-xs">Blog</a></Link>
              <Link href="/project"><a className="sm:mr-6 mr-4 antialiased sm:text-base text-xs">Project</a></Link>
              <button 
                onClick={() => setTheme(colorTheme)} 
                className="bg-gray-700 shadow-lg rounded-full w-7 h-7 text-white flex items-center justify-center"
              > 
                { colorTheme === 'light' ? <SunLight size={20}/>: <MoonDark size={20}/>}
              </button>
            </div>

            <div className="flex flex-row justify-end flex-1 sm:hidden ">
              <div className="my-auto ml-2 transition duration-500 ease-in-out transform hover:rotate-180"> <a href="#"><Facebook size={20}/></a> </div>
              <div className="my-auto ml-2 transition duration-500 ease-in-out transform hover:rotate-180"> <a href="#"><Github size={20}/></a> </div>
              <div className="my-auto ml-2 transition duration-500 ease-in-out transform hover:rotate-180"> <a href="#"><Instagram size={20}/></a> </div>
              <div className="my-auto ml-2 transition duration-500 ease-in-out transform hover:rotate-180"> <a href="#"><Youtube size={20}/></a> </div>
            </div>

          </div>

        </nav>
              
        </div>
    )
}
