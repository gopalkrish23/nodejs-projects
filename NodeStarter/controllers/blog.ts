import { Request, Response } from "express"

export const getBlogById = function (req: Request, res: Response) {
    res.status(200).send("from getBlogById")
}

export const getBlogs = function (req: Request, res: Response) {
    res.status(200).send("from getBlogs")
}

export const addBlog = function (req: Request, res: Response) {
    res.status(200).send("from addBlogs")
}