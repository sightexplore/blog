import Head from 'next/head'
import Layout from '../components/Layout'
import HeroBlock from '../components/HeroBlock'
import ListBlock from '../components/ListBlock/ListBlock'
import AboutUs from '../components/AboutUs/AboutUs'



export default function About() {

    const title = `About`
    const tagline = `Let know us in detail`
    const src = `/svg/home.svg`

    const links = [
      { name: "Home", path: "/" },
      { name: "Projects", path: "/project" }
    ]

    const listElement = [
        { icon: "💙", value: ["Videos & Posts", "Code Snippet", "Programming", "Quiz"] },
        { icon: "📘", value: ["Conceptual Learning", "In-depth Analysis", "Visualization", "Essential Skills"] }
    ]


    return (
        <>
        <Layout about>
            <Head>
                <title>Sight Explore | About</title>
            </Head>

            <HeroBlock title={title} tagline={tagline} src={src} links={links} />

            <AboutUs />

            <div className="text-center mt-32">
                <h1 className="text-4xl">Vision</h1>
                <div className="px-4 sm:px-16 mt-4 text-justify xl:text-2xl xl:px-32 opacity-75 sm:font-light"> 
                    <p className="mb-4">
                        We provide some educational and informative content that would not only help you to excel 
                        in your academic studies but also to boost your conceptual understanding in the long run.
                    </p>
                    <p>
                        We all have learned various concepts in our school life and some which we even pursue for 
                        our higher education. However if our concept is not clear, then we face most of the difficulties
                        to implement our educative skills in real life. With this initiative in our mind, we have 
                        started this team to clear some basic doubts among the students in the field of 
                        Science, Technology and Engineering.
                    </p>
                    <div className="mt-8 flex justify-center flex-col lg:flex-row">
                        <ListBlock listElement={listElement} />
                    </div>
                </div>
            </div>


            <div className="flex items-center justify-center h-screen lg:mx-32">

                <div className="container">
                    <div className="bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg p-5 md:p-20 mx-2">
                        <div className="text-center">
                            <h2 className="text-4xl tracking-tight leading-10 font-extrabold sm:text-5xl sm:leading-none md:text-6xl">
                            Sight<span className="text-indigo-600">Explore</span>
                            </h2>
                            <h3 className='text-xl md:text-3xl mt-10'>We are active on</h3>
                        </div>

                        <div className="flex flex-wrap mt-10 justify-center">

                            <div className="m-3">
                                <a href="#"
                                    className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded-full border-2 border-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                                    <span className="mx-auto">Facebook</span>
                                </a>
                            </div>
                            <div className="m-3">
                                <a href="#"
                                    className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded-full border-2 border-red-600 hover:border-red-600 hover:bg-red-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                                    <span className="mx-auto">Youtube</span>
                                </a>
                            </div>
                            <div className="m-3">
                                <a href="#"
                                    className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded-full border-2 border-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                                    <span className="mx-auto">Instagram</span>
                                </a>
                            </div>
                            <div className="m-3">
                                <a href="#"
                                    className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded-full border-2 border-black hover:border-black hover:bg-black hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                                    <span className="mx-auto">Github</span>
                                </a>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
   
        </Layout>

        </>
    )
}
