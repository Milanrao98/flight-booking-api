import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  flight: { type: mongoose.Schema.Types.ObjectId, ref: "Flight" },
  passengers: { type: Array, required: true },
  status: {
    type: String,
    enum: ["BOOKED", "CANCEL_REQUESTED", "CANCELLED"],
    default: "BOOKED"
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Booking", bookingSchema);
