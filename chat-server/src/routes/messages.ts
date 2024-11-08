import { Router } from "express"
import { addMessage, fetchMessages } from "../controllers/messages"

const router = Router();
router.get("/", fetchMessages)
router.post("/", addMessage)

export default router;