import Head from 'next/head'
import Layout from '../components/Layout'
import Image from "next/image"


export default function Custom404() {
    return <>
    <Layout>
        <Head>
            <title>Sight Explore | 404</title>
        </Head>



        <div className="flex justify-center">
            <div className="m-auto">
                <Image src={`/svg/extract.svg`} width={600} height={400} alt={`404 svg`} />
            </div>
        </div>

        <div className="my-16 text-center font-light">
            <h1 className="text-8xl">Error 404</h1>
        </div>
 

        
    </Layout>

    </>
}