import Head from 'next/head'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import { getAllBlogIds, getBlogData } from '../../lib/blog'
import Image from "next/image"
import React from 'react'
import { useTheme } from '../../hooks/useContextMode'


export default function BlogPage({ data }) {

    const router = useRouter()
    const { colorTheme } = useTheme()

    return (
        <Layout>
            <Head>
                <title>Blog | {data.title}</title>
            </Head>
            
            <div className="group main-blog relative">
                <div className="main-blog-img">
                    <Image src={data.imageLink} width={1600} height={900}/>
                </div>
                <div className="absolute bottom-0 text-left px-2 py-1 sm:p-2 mb-1 bg-white dark:bg-black bg-opacity-25 dark:bg-opacity-50 w-full group-hover:bg-opacity-75 transition duration-300 ease-in-out">
                    <h1 className="font-bold text-md sm:text-lg sm:mb-1 md:text-4xl lg:pt-8 lg:px-8 xl:text-6xl">{data.title}</h1>
                    <div className="flex justify-between text-md font-light text-sm sm:text-base md:text-md lg:p-8">
                        <h1 className="lg:text-2xl">{data.category}</h1>
                        <h1 className="lg:text-2xl">{data.date}</h1>
                    </div>
                </div>
            </div>

            <br />

            <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} className="markdown-blog"/>


            <hr className="my-8" />

            <button type="button" onClick={() => router.back()}
                className="text-lg px-4 py-2 bg-gray-800 text-white dark:bg-white dark:text-gray-800 rounded"
            >
                Back
            </button>

                            
            <style jsx global>{`
                .markdown-blog > p, .markdown-blog > ul{
                    margin: 16px 0;
                }

                .markdown-blog > pre{
                    margin: 0px 10px 20px 10px;
                    padding: 10px 20px;
                    border-radius: 10px;
                    background-color:${colorTheme === 'light'? '#1f2937': '#eaecef'};
                    overflow-x: auto;
                    max-height: 60vh;
                }

                .markdown-blog > p > img{
                    margin: 0px auto;
                }

            `}</style>

        </Layout>
    )
}



export async function getStaticPaths() {
    const paths = getAllBlogIds()
    return {
      paths,
      fallback: false
    };
}


export async function getStaticProps({ params }) {
    const data = await getBlogData(params.id)
    return { 
        props: { data }
    }
  }