import express from "express";
import {
  createFlight,
  getFlights,
  getFlightById,
  updateFlight,
  deleteFlight
} from "../controllers/flight.controller.js";

import { protect } from "../middlewares/auth.middleware.js";
import { adminOnly } from "../middlewares/role.middleware.js";
import { upload } from "../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/", protect, adminOnly, upload.single("image"), createFlight);
router.get("/", getFlights);
router.get("/:id", getFlightById);
router.put("/:id", protect, adminOnly, updateFlight);
router.delete("/:id", protect, adminOnly, deleteFlight);

export default router;
