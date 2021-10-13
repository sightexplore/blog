import Link from "next/link"
import Image from "next/image"


export default function BlogView({ blogData }) {
    return (
        <>
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
        </>
    )
}
