
export default function BlogTags({ hashData }) {
    return (
        <div className="mt-8 mx-4 ">
            <h1 className="text-xl mb-4">Tag</h1>
            <div className="flex flex-start text-xs flex-wrap dark:text-gray-800">
            { (hashData.length !== 0 )?
                hashData.map((x,index) => <p key={index} className="mx-2 mb-1 px-2 py-1 rounded-full bg-white ">{x}</p>) 
                : "No Tags Available" 
            }
            </div>
        </div>
    )
}
