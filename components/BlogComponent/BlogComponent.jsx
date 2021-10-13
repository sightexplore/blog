import BlogTags from './BlogTags'
import BlogCategory from './BlogCategory'


export default function BlogComponent({ categoryData, hashData}) {
    return (
        <>
            <BlogCategory categoryData={categoryData} />
            <BlogTags hashData={hashData} />
        </>
    )
}
