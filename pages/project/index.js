import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import HeroBlock from '../../components/HeroBlock'
import { mapAllProject, getProjectCount, getKeyCategory } from '../../lib/project'
import DataBlock from '../../components/DataBlock'


export default function Project({ category }) {

    const title = `Projects`
    const tagline = `Check out some programming `
    const src = `/svg/home.svg`
    const links = [
      { name: "Home", path: "/" },
      { name: "Blogs", path: "/blog" }
    ]

    return (
        <>
        <Layout>
            <Head>
                <title>Sight Explore | Project</title>
            </Head>

            <HeroBlock title={title} tagline={tagline} src={src} links={links} />

            <div className="flex justify-center items-center lg:mx-16 dark:text-gray-900 lg:flex-row flex-col">
              <DataBlock color={152} name="Category" count={category.length} />
              <DataBlock color={104} name="Project" count={getProjectCount()} />
            </div>

            <div className="my-32">
              <h1 className="text-5xl mb-8 text-center">All Project</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category && category.map((x,index) => {
                    return <div className="rounded border-2 border-gray-400 px-8 py-4 hover:shadow-xl" key={index}>
                      <div className="text-3xl font-bold">{x.name}</div>
                      <p className="mb-4">Total Project: {getProjectCount(x.name)}</p>
                      <Link href={`project/${getKeyCategory(x.name)}`}>
                        <a className="text-md">
                          <span className="px-2 py-1 bg-gray-800 text-white dark:bg-white dark:text-gray-800 rounded ">Open</span>
                        </a>
                      </Link>
                    </div>
                  })} 
                </div>
            </div>



        </Layout>

        </>
    )
}



export async function getStaticProps() {
  const category = mapAllProject()
  return {
    props: {
      category
    }
  }
}
