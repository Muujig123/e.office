// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getAllPostIds } from "../../lib/posts"

export default (req, res) => {
    getAllPostIds()
    res.status(200).json({ name: 'Hello' })
}