import Head from 'next/head'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import { getAllBlogIds, getBlogData } from '../../lib/blog'
import Image from "next/image"
import { useTheme } from '../../hooks/useContextMode'
import Link from 'next/link'

// @ts-ignore
import { FacebookProvider, Comments } from 'react-facebook'


export default function BlogPage({ data }) {

    const router = useRouter()
    const { colorTheme } = useTheme()
    const tags = data.tags.split(',')
    // console.log(tags)


    return (
        <Layout>
            <Head>
                <title>Blog | {data.title} </title>
            </Head>
            
            <div className="group main-blog relative">
                <div className="main-blog-img">
                    <Image src={data.imageLink} width={1600} height={900} alt={`Image: ${data.filename}`}/>
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

            <div className="my-8 mx-4 ">
                <h1 className="text-xl mb-4">Tags:</h1>
                <div className="flex flex-start text-sm flex-wrap text-gray-200 dark:text-gray-800">
                    {tags.map((x,index) =>

                        <Link href={`/blog/tags/${x.toLowerCase()}`}  key={index}  ><a>
                            <p className="mr-2 mb-2 px-4 py-1 rounded-full dark:bg-white bg-gray-800 ">
                                {x.toLowerCase()}
                            </p>
                        </a></Link>
                    )}
                </div>
            </div>

            <div className="lg:mx-24 lg:p-4 rounded-lg shadow-lg mb-16 bg-gray-300 dark:bg-gray-200 ">
                <h1 className="text-center text-2xl font-bold text-gray-800 my-8"> Comments </h1>
                <FacebookProvider appId="459712362082396">
                    <Comments width="100%" href={`http://localhost:3000/blog/${data.id}`} />
                </FacebookProvider>
            </div>


            <button type="button" onClick={() => router.back()}
                className="text-lg px-4 py-2 bg-gray-800 text-white dark:bg-white dark:text-gray-800 rounded"
            > Back </button>

                            
            <style jsx global>{`
                .markdown-blog > p, .markdown-blog > ul, .markdown-blog > ol{
                    margin: 16px 0;
                }

                .markdown-blog > blockquote{
                    margin: 0 0 16px 0;
                }

                .markdown-blog > pre{
                    margin: 0px 10px 20px 10px;
                    padding: 10px 20px;
                    border-radius: 10px;
                    background-color:${colorTheme === 'light'? '#1f2937': '#eaecef'};
                    overflow-x: auto;
                    max-height: 60vh;
                }

                .markdown-blog > p > img{ margin: 0px auto; }

                .markdown-blog > blockquote {
                    font-size: 125%;
                    opacity: 0.5;
                    font-style: italic;
                    border-left: 4px solid ${colorTheme === 'light'? '#1f2937': '#ccd4e1'};
                    background-color: ${colorTheme === 'light'? '#0c1117': '#eaecef'};
                }

                .markdown-blog > blockquote > p { padding: 20px;}

                .markdown-blog > blockquote::before {
                    content: "\"";
                    position: absolute;
                    font-size: 36px;
                }

                .markdown-blog ol li{ list-style: devanagari; }
                .markdown-blog ul li { list-style: disc; }
                .markdown-blog ul li *{ margin-left: 0.5rem; }
                .markdown-blog ol li *{ margin-left: 0.5rem; }
                .markdown-blog p a{ color: #0088ff }
                .markdown-blog p a: hover{ color: #00ff88; }

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