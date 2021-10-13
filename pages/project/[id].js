import Head from 'next/head'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import { getAllProjectId, getProjectById } from '../../lib/project'
import { category } from '../../content/project'


export default function SubProject({data, title}) {

    const router = useRouter()

    return (
        <Layout>
            <Head>
                <title>Sight Explore | Project</title>
            </Head>

            <div className="text-center w-full my-32">
                <p className="text-8xl font-bold">{ title }</p>
                <p className="text-2xl">Project</p>
            </div>


            <div className="my-32">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {data && data.map((x,index) => {
                    return <div className="rounded border-2 border-gray-400 px-8 py-4 hover:shadow-xl" key={index}>
                      <div className="text-3xl font-bold">{x.name}</div>
                      <p className="mb-4">{x.about}</p>
                        <a href={x.link} target="_blank" rel="noreferrer" className="text-md px-4 py-1 bg-gray-800 text-white dark:bg-white dark:text-gray-800 rounded">
                          Visit
                        </a>
                    </div>
                  })} 
                </div>
            </div>

            <button type="button" onClick={() => router.back()}
                className="text-lg px-4 py-2 bg-gray-800 text-white dark:bg-white dark:text-gray-800 rounded"
            >
                Back
            </button>

        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllProjectId()
    return {
      paths,
      fallback: false
    };
}


export async function getStaticProps({ params }) {
    const data = getProjectById(params.id)
    const title = category[params.id]
    return { 
        props: { data, title }
    }
  }
