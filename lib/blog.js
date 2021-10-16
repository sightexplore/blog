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
    allCategory = {}

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
  // let temp = allCategory
  // allCategory = {}
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


//Category
export async function getAllBlogCategory(getParams = false){
  let category = {}
  const fileNames = fs.readdirSync(postsDirectory)

  fileNames.map(fileName => {
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const matterResult = matter(fileContents)

    if(matterResult.data.category in category){
      category[matterResult.data.category] += 1
    }else{
      category[matterResult.data.category] = 1
    }

  })

  if(getParams === true){
    let x = []
    Object.keys(category).map((key) => x.push(key))

    return x.map((key) => {
      return {
        params: { id: key.toLowerCase() },
      }
    })
  }
    
  return category
}


export async function getBlogByCategory(id){
  let blogs = []
  const fileNames = fs.readdirSync(postsDirectory)
  // console.log(fileNames)

  fileNames.map(fileName => {
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const matterResult = matter(fileContents)

    if( matterResult.data.category.toLowerCase() === id.toLowerCase() ){
      matterResult.data['filename'] = fileName.replace(/\.md$/, "")
      blogs.push(matterResult.data)
    }
  })

  return blogs
}


export async function listBlogId(){
  let tags = {}
  const fileNames = fs.readdirSync(postsDirectory)

  fileNames.map(fileName => {
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const matterResult = matter(fileContents)

    let allTags = matterResult.data.tags
    allTags = allTags.split(',')

    allTags.map(x => {
      if(x in tags){ tags[x] += 1 }
      else{ tags[x] = 1 }
    })
  })

  return tags
}