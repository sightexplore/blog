import Head from "next/head";
import Layout from "../../components/Layout";
import { useState, useRef } from "react";
import { mapAllBlogs, getAllTags, getAllCategory } from "../../lib/blog";
import AnalyticBlock from "../../components/AnalyticBlock/AnalyticBlock";
import BlogComponent from "../../components/BlogComponent/BlogComponent";
import BlogPreview from "../../components/BlogComponent/BlogPreview";
import BlogView from "../../components/BlogComponent/BlogView";


export default function Blog({ blogData, hashData, categoryData }) {

  const [search, setSearch] = useState('')
  const searchVal = useRef()

  function handleInput(){ setSearch(searchVal.current.value) }

  return (
    <>
      <Layout about>
        <Head>
          <title>Sight Explore | Blogs</title>
        </Head>


        { (blogData.length !== 0) && 


        <div className="grid grid-cols-8 gap-4">

          <div className="col-span-8 rounded lg:p-4 lg:col-span-6">
            <BlogPreview blogData={blogData} />
            <div className="grid grid-cols-2 gap-4">
              <BlogView blogData={blogData} />
            </div>
          </div>

          {/* ================= Search =================== */}
          <div className="lg:col-span-2 col-span-8">
            <div className="bg-gray-400 rounded px-2 py-4 shadow-xl mt-4">

              {/* ====================Serach Bar ======================== */}
              <form action={`/blog/search/${search}`} method='POST' className="flex justify-center bg-white rounded-xl border-2 overflow-hidden">
                  <input required minLength={3} ref={searchVal} onChange={handleInput} type="search" placeholder="Search" className="block text-gray-800 rounded-md border-0 focus:outline-none focus:ring-0 focus:border-blue-500 flex-grow p-2 w-4" />
                  <button type="submit" >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto m-2" style={{ color: "gray"}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                  </button>
              </form>

              {/* {console.log(categoryData, hashData)} */}
              <BlogComponent categoryData={categoryData} hashData={hashData} />

            </div>
          </div>
        </div>

      }
      { (blogData.length === 0) && 
        <div className="lg:mx-16 my-32 py-32 flex justify-center">
          <h1 className="font-bold text-2xl md:text-4xl lg:text-8xl"> No Blogs Added</h1>
        </div>
      }

        <AnalyticBlock />
      </Layout>
    </>
  );
}

export async function getStaticProps() {


  const blogData = mapAllBlogs();
  const categoryData = getAllCategory();
  const hashData = getAllTags();

  return {
    props: {
      blogData,
      hashData,
      categoryData
    },
  };
}
