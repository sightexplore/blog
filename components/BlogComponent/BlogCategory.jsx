import Link from 'next/link'
import React from 'react'


export default function BlogCategory({ categoryData }) {

    return (
        <div className="mt-8 mx-4">
            <Link href="/blog/category">
                <a>
                    <h1 className="text-xl mb-4">Category</h1>
                </a>
            </Link>
            <div className="grid grid-cols-4 gap-1 mx-2">
                { Object.keys(categoryData).map((key) => {
                return <React.Fragment key={key}>
                    
                    <div className="col-span-3">
                        <Link href={`/blog/category/${key.toLocaleLowerCase()}`}>
                            <a>{key}</a>
                        </Link>
                    </div>
                        
                    <div className="col-span-1">{categoryData[key]}</div>
                </React.Fragment>
                }) }
            </div>
        </div>
    )
}
