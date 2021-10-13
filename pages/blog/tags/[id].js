import Head from 'next/head'
import Layout from '../../../components/Layout'
import { useRouter } from 'next/router'

export default function BlogByTags() {

    const router = useRouter()
    console.log(router)

    return (
        <>
            <Layout>
                <Head>
                    <title>Sight Explore | Blogs: Tags</title>
                </Head>

                <div className="lg:mx-16 my-32 py-32 flex justify-center">
                    <h1 className="font-bold text-2xl md:text-4xl lg:text-8xl"> {`#${router.query.id}`} </h1>
                </div>
            </Layout>
        </>
    )
}
