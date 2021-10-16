import Head from "next/head";
import Layout from "../../../components/Layout";
import { useRouter } from 'next/router'
import { getAllBlogCategory } from "../../../lib/blog";
import Link from 'next/link'


export default function Category({ blogData }) {

    const router = useRouter()

    return (
        <>
            <Layout>
                <Head>
                    <title>Sight Explore | Blogs: Category</title>
                </Head>

                <div className="lg:mx-16 my-32 py-32 flex justify-center">
                    <h1 className="font-bold text-2xl md:text-4xl lg:text-8xl"> Blogs Category </h1>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width={24} height={24} viewBox="0 0 24 24" 
                        fill="none" stroke="currentColor" strokeWidth={2} 
                        strokeLinecap="round" strokeLinejoin="round" 
                        className="animate-bounce w-6 h-6">
                            <line x1={12} y1={5} x2={12} y2={19} />
                            <polyline points="19 12 12 19 5 12" />
                    </svg>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 mb-8 gap-4">
                    { Object.keys(blogData).map((key) => {
                        return <Link key={key}  href={`/blog/category/${key.toLowerCase()}`}>
                                <a>
                                    <div className="flex justify-around px-8 rounded hover:shadow-lg font-bold lg:text-2xl p-4 bg-gray-100 dark:bg-gray-800">
                                        <div className="flex-1 text-left"> { key } </div>
                                        <div className="flex-1 text-right">{ blogData[key]}</div>
                                    </div>
                                </a>
                            </Link>
                    }) }
                </div>

                <button type="button" onClick={() => router.back()}
                className="text-lg px-4 py-2 bg-gray-800 text-white dark:bg-white dark:text-gray-800 rounded"
                >
                    Back
                </button>
            </Layout>
        </>
    )
}


export async function getStaticProps() {
    const blogData = await getAllBlogCategory();
    return {
      props: {
        blogData,
      },
    };
  }
