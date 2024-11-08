import express from "express";
import { signout, test } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/test", test);
router.delete('/delete/:userId',verifyToken,signout)

export default router;
