import Head from 'next/head'
import Layout from '../../../components/Layout'
import { useRouter } from 'next/router'
import BlogView from '../../../components/BlogComponent/BlogView'


export default function BlogPage({ search }) {

    const router = useRouter()
    console.log(search)

    return (
        <Layout>
            <Head>
                <title>Sight Explore | ?{ router.query.id } </title>
            </Head>

            <div className="lg:mx-16 my-32 py-32 flex justify-center">
                <h1 className="font-bold text-2xl md:text-4xl lg:text-8xl"> ?{ router.query.id } </h1>
                <svg xmlns="http://www.w3.org/2000/svg"
                    width={24} height={24} viewBox="0 0 24 24" 
                    fill="none" stroke="currentColor" strokeWidth={2} 
                    strokeLinecap="round" strokeLinejoin="round" 
                    className="animate-bounce w-6 h-6">
                        <line x1={12} y1={5} x2={12} y2={19} />
                        <polyline points="19 12 12 19 5 12" />
                </svg>
            </div>

            { (search.length === 0)?            
                <div className="mb-32 text-center">
                    <h1>No Blogs Found</h1>
                </div>:            
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <BlogView blogData={ search } />
                </div>
            }


            <button type="button" onClick={() => router.back()}
                className="text-lg px-4 py-2 bg-gray-800 text-white dark:bg-white dark:text-gray-800 rounded"
            > Back </button>

        </Layout>
    )
}


export async function getServerSideProps(context) {
    const { id } = context.query
    const res = await fetch(`http://localhost:3000/api/blog`)
    const data = await res.json()

    const search = data.filter(x => x.title.toLowerCase().indexOf(id.toLowerCase()) !== -1)
  
    return {
      props: { search }, // will be passed to the page component as props
    }
  }
