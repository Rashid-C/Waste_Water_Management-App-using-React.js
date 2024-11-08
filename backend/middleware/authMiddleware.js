import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";


export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return next(errorHandler(403, "Access denied. No token provided."));
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;  // Add user info to the request
        next();
      } catch (err) {
        next(errorHandler(401, "Invalid or expired token"));
      }
    };