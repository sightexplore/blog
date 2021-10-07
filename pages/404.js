import Head from 'next/head'
import Layout from '../components/Layout'

export default function Custom404() {
    return <>
    <Layout>
        <Head>
            <title>Sight Explore | 404</title>
        </Head>

        <div className="my-16 text-center font-light">
            <h1 className="text-8xl">Error 404</h1>
        </div>

        
    </Layout>

    </>
}