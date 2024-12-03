import express from "express"
import { sendMessage } from "../controllers/message.controlles.js";
import protectRoute from "../middleware/protectRoutes.js";
import { getMessage } from "../controllers/message.controlles.js";

const router = express.Router();
router.get("/:id",protectRoute, getMessage)
router.post("/send/:id",protectRoute, sendMessage)

export default router;