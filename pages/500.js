import Head from 'next/head'
import Layout from '../components/Layout'

export default function Custom500() {
    return <>
    <Layout>
        <Head>
            <title>Sight Explore | 500</title>
        </Head>

        <div className="my-16 text-center font-light">
            <h1 className="text-8xl">Error 500</h1>
            <h1 className="text-xl">Internal Server Error</h1>
        </div>

        
    </Layout>

    </>
}