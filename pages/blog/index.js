import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import { mapAllBlogs } from "../../lib/blog";
import AnalyticBlock from "../../components/AnalyticBlock/AnalyticBlock";


export default function blog({ blogData }) {


  var featured = blogData.filter(x => parseInt(x.featured) === 1)
  var preview = featured[Math.floor(Math.random()*featured.length)]

  return (
    <>
      <Layout about>
        <Head>
          <title>Sight Explore | Blogs</title>
        </Head>


        { (blogData.length !== 0) && 


        <div className="grid grid-cols-8 gap-4">
          {/* ====================================== Blog Section ======================================== */}
          <div className="col-span-8 rounded lg:p-4 lg:col-span-6">
            {/* ====================================== Main Image ======================================== */}
            <Link href={`/blog/${preview.filename}`}>
              <a>
                <div className="group main-blog relative">
                  <div className="main-blog-img">
                    <Image src={preview.imageLink} width={1600} height={900} alt={`Image: ${preview.filename}`}/>
                  </div>
                  <div className="absolute bottom-0 text-left px-2 py-1 sm:p-5 mb-1 bg-white dark:bg-black bg-opacity-25 dark:bg-opacity-50 w-full group-hover:bg-opacity-75 transition duration-300 ease-in-out">
                    <h1 className="text-md sm:text-2xl sm:mb-2 md:text-4xl">{preview.title}</h1>
                    <div className="flex justify-between text-md font-light text-sm sm:text-lg md:text-xl">
                      <h1 className="italic">{preview.category}</h1>
                      <h1 className="">{preview.date}</h1>
                    </div>
                  </div>
                </div>
              </a>
            </Link>

            {/*===================== Other Blogs ====================================*/}
            <div className="grid grid-cols-2 gap-4">
              {blogData.map((x, index) => (
                <div key={index} className="col-span-2 mt-8 lg:mx-4 sm:col-span-1 " >
                  <Link href={`/blog/${x.filename}`}>
                    <a>
                      <div className="group main-blog relative">
                        <div className="main-blog-img">
                          <Image src={x.imageLink} width={1600} height={900} alt={`Image: ${x.filename}`}/>
                        </div>
                        <div className="absolute bottom-0 text-left px-2 py-1 sm:p-2 mb-1 bg-white dark:bg-black bg-opacity-25 dark:bg-opacity-50 w-full group-hover:bg-opacity-75 transition duration-300 ease-in-out">
                          <h1 className="text-md sm:text-md sm:mb-1 md:text-lg">{x.title}</h1>
                          <div className="flex justify-between text-md font-light text-sm sm:text-base md:text-md">
                            <h1 className="italic">{x.category}</h1>
                            <h1 className="">{x.date}</h1>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* ====================================== Search ======================================== */}
          <div className="lg:col-span-2 col-span-8">
            <div className="bg-gray-400 rounded px-2 py-4 shadow-xl mt-4">
              {/* ====================Serach Bar ======================== */}

                <form action="" className="flex justify-center bg-white rounded-xl border-2 overflow-hidden">
                    <input type="search" placeholder="Search" className="block text-gray-800 rounded-md border-0 focus:outline-none focus:ring-0 focus:border-blue-500 flex-grow p-2 w-4" />
                    <button type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto m-2" style={{ color: "gray"}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </form>


                <div className="mt-8 mx-4">
                    <h1 className="text-xl mb-4">Category</h1>
                    <div className="grid grid-cols-4 gap-1 mx-2">
                        <div className="col-span-3">Mathematics</div>
                        <div className="col-span-1">34</div>
                        <div className="col-span-3">Mathematics</div>
                        <div className="col-span-1">34</div>
                        <div className="col-span-3">Mathematics</div>
                        <div className="col-span-1">34</div>
                        <div className="col-span-3">Mathematics</div>
                        <div className="col-span-1">34</div>
                        <div className="col-span-3">Mathematics</div>
                        <div className="col-span-1">34</div>
                    </div>
                </div>

                <div className="mt-8 mx-4 ">
                    <h1 className="text-xl mb-4">Tag</h1>
                    <div className="flex flex-start text-xs flex-wrap dark:text-gray-800">
                        <p className="mx-2 mb-1 px-2 py-1 rounded-full bg-white ">Hello</p>
                        <p className="mx-2 mb-1 px-2 py-1 rounded-full bg-white ">Python</p>
                        <p className="mx-2 mb-1 px-2 py-1 rounded-full bg-white ">Java</p>
                        <p className="mx-2 mb-1 px-2 py-1 rounded-full bg-white ">C</p>
                        <p className="mx-2 mb-1 px-2 py-1 rounded-full bg-white ">C++</p>
                        <p className="mx-2 mb-1 px-2 py-1 rounded-full bg-white ">JavaScript</p>
                        <p className="mx-2 mb-1 px-2 py-1 rounded-full bg-white ">CSS3</p>
                        <p className="mx-2 mb-1 px-2 py-1 rounded-full bg-white ">Ruby</p>
                    </div>
                </div>

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
  return {
    props: {
      blogData,
    },
  };
}
