import express from "express";
import { google, signin, signup } from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/signup",signup);
router.post('/signin',signin)
router.post('/google',google)
router.get("/dashboard", verifyToken, (req, res) => {
    res.json({ message: "Welcome to your dashboard" });
  });
export default router;