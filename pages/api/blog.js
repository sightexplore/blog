// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Blogs from '../../content/blog'

export default function handler(req, res) {
    res.status(200).json(Blogs)
}