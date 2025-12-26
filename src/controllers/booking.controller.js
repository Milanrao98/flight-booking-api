import Booking from "../models/Booking.js";
import Flight from "../models/Flight.js";

export const createBooking = async (req, res, next) => {
  try {
    const flight = await Flight.findById(req.body.flight);

    if (flight.availableSeats < req.body.passengers.length) {
      throw new Error("Not enough seats available");
    }

    flight.availableSeats -= req.body.passengers.length;
    await flight.save();

    const booking = await Booking.create({
      user: req.user.id,
      flight: flight._id,
      passengers: req.body.passengers
    });

    res.status(201).json(booking);
  } catch (error) {
    next(error);
  }
};

export const cancelBookingRequest = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id);
    booking.status = "CANCEL_REQUESTED";
    await booking.save();
    res.json(booking);
  } catch (error) {
    next(error);
  }
};

export const adminCancelBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id).populate("flight");

    booking.flight.availableSeats += booking.passengers.length;
    await booking.flight.save();

    booking.status = "CANCELLED";
    await booking.save();

    res.json(booking);
  } catch (error) {
    next(error);
  }
};
