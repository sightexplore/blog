import Link from 'next/link'


export default function BlogTags({ hashData }) {
    
    return (
        <div className="mt-8 mx-4 ">
            <Link href="/blog/tags">
                <a>
                    <h1 className="text-xl mb-4">Tags</h1>
                </a>
            </Link>
            <div className="flex flex-start text-xs flex-wrap dark:text-gray-800">
            { (hashData.length !== 0 )?
                hashData.map((x,index) =>
                    <Link href={`/blog/tags/${x}`} key={index}>
                        <a><p className="mx-2 mb-1 px-2 py-1 rounded-full bg-white ">{x}</p></a>
                    </Link>
                ) 
                : "No Tags Available" 
            }
            </div>
        </div>
    )
}
