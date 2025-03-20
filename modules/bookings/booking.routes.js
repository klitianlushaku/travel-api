import express from "express";
<<<<<<< HEAD
import {
  createBooking,
  getMyBooking,
  cancelBooking,
} from "./booking.constroller.js";
const router = express.Router();

router.post("/:tourId/book", createBooking);
router.get("/myBookings/:userID", getMyBooking);
router.delete("/:bookingId/cancel", cancelBooking);
=======
import { cancelBooking, createBooking, getMyBooking } from './booking.controller.js';

const router = express.Router();

router.post("/:id/book", createBooking);
router.get("/bookings" , getMyBooking);
router.delete("/:bookingId/cancel", cancelBooking);






>>>>>>> 6fa8b2b4619084cdadc96b7435af5b5875c9b593

export default router;
