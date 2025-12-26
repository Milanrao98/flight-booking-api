import Flight from "../models/Flight.js";

export const createFlight = async (req, res, next) => {
  try {
    const flight = await Flight.create({
      ...req.body,
      image: req.file?.path,
      createdBy: req.user.id
    });
    res.status(201).json(flight);
  } catch (error) {
    next(error);
  }
};

export const getFlights = async (req, res, next) => {
  try {
    const flights = await Flight.find(req.query);
    res.json(flights);
  } catch (error) {
    next(error);
  }
};

export const getFlightById = async (req, res, next) => {
  try {
    const flight = await Flight.findById(req.params.id);
    res.json(flight);
  } catch (error) {
    next(error);
  }
};

export const updateFlight = async (req, res, next) => {
  try {
    const flight = await Flight.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.json(flight);
  } catch (error) {
    next(error);
  }
};

export const deleteFlight = async (req, res, next) => {
  try {
    await Flight.findByIdAndDelete(req.params.id);
    res.json({ message: "Flight deleted" });
  } catch (error) {
    next(error);
  }
};
