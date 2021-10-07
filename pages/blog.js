import Head from 'next/head'
import Layout from '../components/Layout'
import HeroBlock from '../components/HeroBlock'


export default function blog() {

    const title = `Blogs`
    const tagline = `Check out some of our Blogs`
    const src = `/svg/home.svg`
    const links = [
      { name: "Home", path: "/" },
      { name: "Projects", path: "/project" }
    ]

    return (
        <>
        <Layout about>
            <Head>
                <title>Sight Explore | Blogs</title>
            </Head>

            <HeroBlock title={title} tagline={tagline} src={src} links={links} />
            
        </Layout>

        </>
    )
}
