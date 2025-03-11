import express from "express";
import { cancelBooking, createBooking, getMyBooking } from './booking.controller.js';

const router = express.Router();

router.post("/:id/book", createBooking);
router.get("/bookings" , getMyBooking);
router.delete("/:bookingId/cancel", cancelBooking);







export default router;
