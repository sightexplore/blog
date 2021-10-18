import Link from "next/link"
import Image from "next/image"


export default function BlogPreview({ blogData }) {

    var featured = blogData.filter(x => parseInt(x.featured) === 1)
    var preview = featured[Math.floor(Math.random()*featured.length)]

    return (
        <Link href={`/blog/${preview.filename}`}>
        <a>
          <div className="group main-blog relative shadow-lg">
            <div className="main-blog-img">
              <Image src={preview.imageLink} width={1600} height={900} alt={`Image: ${preview.filename}`}/>
            </div>
            <div className="absolute bottom-0 text-left px-2 py-1 sm:p-5 mb-1 bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50 w-full group-hover:bg-opacity-75 transition duration-300 ease-in-out">
              <h1 className="text-md sm:text-2xl sm:mb-2 md:text-4xl">{preview.title} <em className="text-sm">Featured</em> </h1>
              <div className="flex justify-between text-md font-light text-sm sm:text-lg md:text-xl">
                <h1 className="italic">{preview.category}</h1>
                <h1 className="">{preview.date}</h1>
              </div>
            </div>
          </div>
        </a>
      </Link>
    )
}
