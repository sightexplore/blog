import Head from 'next/head'
import Layout from '../../../components/Layout'
import { useRouter } from 'next/router'
import { getAllBlogCategory, getBlogByCategory } from "../../../lib/blog";
import BlogView from '../../../components/BlogComponent/BlogView';


export default function BlogByCategory({ data }) {

    const router = useRouter()

    return (
        <>
            <Layout>
                <Head>
                    <title>Sight Explore | .{ router.query.id }</title>
                </Head>

                <div className="lg:mx-16 my-32 py-32 flex justify-center">
                    <h1 className="font-bold text-2xl md:text-4xl lg:text-8xl"> .{ router.query.id } </h1>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width={24} height={24} viewBox="0 0 24 24" 
                        fill="none" stroke="currentColor" strokeWidth={2} 
                        strokeLinecap="round" strokeLinejoin="round" 
                        className="animate-bounce w-6 h-6">
                            <line x1={12} y1={5} x2={12} y2={19} />
                            <polyline points="19 12 12 19 5 12" />
                    </svg>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    <BlogView blogData={ data } />
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



export async function getStaticPaths() {
    const paths = await getAllBlogCategory(true)
    console.log(paths)
    return {
      paths,
      fallback: false
    };
}


export async function getStaticProps({ params }) {
    const data = await getBlogByCategory(params.id)
    return { 
        props: { data }
    }
  }