import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/upload.middleware.js";
import {
  getUserProfile,
  updateUserProfile
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protect, getUserProfile);

router.put(
  "/profile",
  protect,
  upload.single("profilePicture"),
  updateUserProfile
);

export default router;
