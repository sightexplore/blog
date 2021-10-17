import Head from 'next/head'
import AnalyticBlock from '../components/AnalyticBlock/AnalyticBlock'
import HeroBlock from '../components/HeroBlock'
import IntroBlock from '../components/IntroBlock/IntroBlock'
import Layout from '../components/Layout'
import WorkBlock from '../components/WorkBlock/WorkBlock'
import BlogFeature from '../components/BlogComponent/BlogFeature'
import { getProjectCount } from '../lib/project'


export default function Home({ data }) {

  const title = `Explore you Limits`
  const tagline = `Never stop learning, because life never stops teaching.`
  const src = `/svg/home.svg`
  const links = [
    { name: "Blogs", path: "/blog" },
    { name: "Projects", path: "/project" }
  ]

  return (
    <>
    <Layout home>

        <Head>
          <title>Sight Explore | Home</title>
        </Head>
        
      <HeroBlock title={title} tagline={tagline} src={src} links={links} />

      <IntroBlock/>
      <AnalyticBlock/>
      <WorkBlock blogCount={data.length} projectCount={getProjectCount()} />

      <BlogFeature data={data} />

    </Layout>

    </>
  )
}


export async function getServerSideProps( ) {
  const res = await fetch(`http://localhost:3000/api/blog`)
  const data = await res.json()
  return {
    props: { data }, // will be passed to the page component as props
  }
}