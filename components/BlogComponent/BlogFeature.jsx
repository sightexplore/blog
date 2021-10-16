import Image from 'next/image'
import Link from "next/link"

export default function BlogComponent({ data }) {

    let featured = data.filter(x => x.featured === "1")

    return (
        <>

            { featured.length > 0 &&
            <section className="py-1 mt-16 mb-16">

                <div className="flex justify-evenly flex-col flex-col-reverse  lg:flex-row ">
                <div className="flex-1 flex justify-center self-center flex-col">
                    <h1 className="text-4xl mb-4 font-bold text-center">
                    Featured Blogs
                    </h1>
                    <p className="text-xl mb-2  text-center">
                        Have a look to some of our featured Blogs
                    </p>
                </div>
                <div className="flex-1 mx-auto">
                    <Image src="/svg/home.svg" width={600} height={400} alt={`hero-icon`} />
                </div>
                </div>

                <div className="grid gap-4 mb-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {featured.map((x, index) => (
                    <div key={index} className="col-span-2 mt-8 lg:mx-4 sm:col-span-1 " >
                    <Link href={`/blog/${x.filename}`}>
                        <a>
                        <div className="group main-blog relative shadow-lg">
                            <div className="main-blog-img">
                            <Image src={x.imageLink} width={1600} height={900} alt={`Image: ${x.filename}`}/>
                            </div>
                            <div className="absolute bottom-0 text-left px-2 py-1 sm:p-2 mb-1 bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50 w-full group-hover:bg-opacity-75 transition duration-300 ease-in-out">
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

            </section>
            }
        </>
    )
}