import fs from "fs"
import path from "path"
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'


const postsDirectory = path.join(process.cwd(), "content/blog")

var allTags = ""
const hashTag = new Set()

var allCategory = {}


export function getAllBlogIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    }
  })
}


export function mapAllBlogs(){
    const fileNames = fs.readdirSync(postsDirectory)
    var mappedBlog = []

    fileNames.map((fileName) => {
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const matterResult = matter(fileContents)

        matterResult.data['filename'] = fileName.replace(/\.md$/, "")
        mappedBlog.push(matterResult.data)

        //Append Tags
        allTags = matterResult.data.tags + "," + allTags

        //Append Category
        if(matterResult.data.category in allCategory){
          allCategory[matterResult.data.category] += 1
        }else{
          allCategory[matterResult.data.category] = 1
        }

    })
    return mappedBlog
}


export function getAllTags(){
  var arr = allTags.split(",")
  arr.pop()
  arr.forEach(element => { hashTag.add(element.toLowerCase()) });
  return Array.from(hashTag)
}


export function getAllCategory(){
  console.log(allCategory)
  return allCategory
}



export async function getBlogData(id) {

  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

  const contentHtml = processedContent.toString()

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data,
  }
}
