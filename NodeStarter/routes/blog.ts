import express from "express"
import { addBlog, getBlogById, getBlogs } from "../controllers/blog"
import requireLogin from "../middlewares/requireLogin"

const router = express.Router()
router.get("/:id", requireLogin, getBlogById)
router.get("/", requireLogin, getBlogs)
router.post("/", requireLogin, addBlog)

export default router;