import Head from "next/head";
import Layout from "../../../components/Layout";

export default function category() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Sight Explore | Blogs: Category</title>
                </Head>

                <div className="lg:mx-16 my-32 py-32 flex justify-center">
                    <h1 className="font-bold text-2xl md:text-4xl lg:text-8xl"> Blogs Category </h1>
                </div>
            </Layout>
        </>
    )
}
