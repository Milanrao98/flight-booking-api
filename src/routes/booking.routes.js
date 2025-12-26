import express from "express";
import {
  createBooking,
  cancelBookingRequest,
  adminCancelBooking
} from "../controllers/booking.controller.js";

import { protect } from "../middlewares/auth.middleware.js";
import { adminOnly } from "../middlewares/role.middleware.js";

const router = express.Router();

router.post("/", protect, createBooking);
router.put("/:id/cancel", protect, cancelBookingRequest);
router.put("/:id/admin-cancel", protect, adminOnly, adminCancelBooking);

export default router;
