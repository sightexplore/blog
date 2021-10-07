import '../styles/globals.css'
// import 'tailwindcss/tailwind.css'
import Navbar from "../components/Header/Navbar"
import Footer from '../components/Footer/Footer'


function MyApp({ Component, pageProps }) {
  return <>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
  </>
}

export default MyApp
