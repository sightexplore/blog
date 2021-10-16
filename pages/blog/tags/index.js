import Head from "next/head";
import Layout from "../../../components/Layout";
import { useRouter } from 'next/router'
import { listBlogId } from '../../../lib/blog'
import Link from 'next/link'


export default function Tags({ blogData }) {

    const router = useRouter()
    // console.log(blogData)
    
    return (
        <>
            <Layout>
                <Head>
                    <title>Sight Explore | Blogs: Tags</title>
                </Head>

                <div className="lg:mx-16 my-32 py-32 flex justify-center">
                    <h1 className="font-bold text-2xl md:text-4xl lg:text-8xl"> Blogs Tags </h1>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width={24} height={24} viewBox="0 0 24 24" 
                        fill="none" stroke="currentColor" strokeWidth={2} 
                        strokeLinecap="round" strokeLinejoin="round" 
                        className="animate-bounce w-6 h-6">
                            <line x1={12} y1={5} x2={12} y2={19} />
                            <polyline points="19 12 12 19 5 12" />
                    </svg>
                </div>

                <div className="flex flex-wrap mb-8">
                    { Object.keys(blogData).map((key) => {
                        return <Link key={key}  href={`/blog/tags/${key.toLowerCase()}`}>
                                <a>
                                    <div className="flex mr-4 mb-4 px-2 py-1 justify-around lg:px-4 lg:py-2 rounded-full hover:shadow-lg sm:font-bold lg:text-lg bg-gray-100 dark:bg-gray-800">
                                        <div className="flex-1 text-left pr-8"> #{ key.toLowerCase() } </div>
                                        <div className="flex-1 text-right">{ blogData[key] }</div>
                                    </div>
                                </a>
                            </Link>
                    }) }
                </div>

                <button type="button" onClick={() => router.back()}
                className="text-lg px-4 py-2 bg-gray-800 text-white dark:bg-white dark:text-gray-800 rounded">
                    Back
                </button>
            </Layout>
        </>
    )
}



export async function getStaticProps() {
    const blogData = await listBlogId();
    return {
      props: {
        blogData,
      },
    };
  }
