import express from "express";
import { createBooking } from './booking.controller.js';

const router = express.Router();

router.post("/:id/book", createBooking);
router.get("/bookings");
router.delete("/:bookingId/cancel");







export default router;
