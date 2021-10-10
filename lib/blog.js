import fs from "fs";
import path from "path";
import matter from 'gray-matter'


const postsDirectory = path.join(process.cwd(), "content/blog");

export function getAllBlogIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}


export function mapAllBlogs(){
    const fileNames = fs.readdirSync(postsDirectory);
    var mappedBlog = []

    fileNames.map((fileName) => {
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const matterResult = matter(fileContents)

        mappedBlog.push(matterResult.data)
    })

    console.log(mappedBlog)

    return "mappedBlog"
}



export async function getBlogData(id) {

  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
