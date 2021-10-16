// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mapAllBlogs } from '../../lib/blog'


export default function handler(req, res) {
    res.status(200).json(mapAllBlogs())
}