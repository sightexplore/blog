import '../styles/globals.css'
// import 'tailwindcss/tailwind.css'
import Navbar from "../components/Header/Navbar"
import Footer from '../components/Footer/Footer'
import ModeProvider from '../hooks/useContextMode'


function MyApp({ Component, pageProps }) {
  return <>
    <ModeProvider>
      <Navbar/>
        <Component {...pageProps} />
      <Footer/>
    </ModeProvider>
  </>
}

export default MyApp
