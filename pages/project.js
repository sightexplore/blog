import Head from 'next/head'
import Layout from '../components/Layout'
import HeroBlock from '../components/HeroBlock'


export default function project() {

    const title = `Projects`
    const tagline = `Check out some programming `
    const src = `/svg/home.svg`
    const links = [
      { name: "Home", path: "/" },
      { name: "Blogs", path: "/blog" }
    ]


    return (
        <>
        <Layout>
            <Head>
                <title>Sight Explore | Project</title>
            </Head>

            <HeroBlock title={title} tagline={tagline} src={src} links={links} />

        </Layout>

        </>
    )
}
