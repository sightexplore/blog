
export default function BlogCategory({ categoryData }) {
    return (
        <div className="mt-8 mx-4">
            <h1 className="text-xl mb-4">Category</h1>
            <div className="grid grid-cols-4 gap-1 mx-2">
                { Object.keys(categoryData).map((key) => {
                return <>
                    <div className="col-span-3">{key}</div>
                    <div className="col-span-1">{categoryData[key]}</div>
                </>
                }) }
            </div>
        </div>
    )
}
