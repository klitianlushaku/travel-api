import Booking from "./booking.model.js";
import Tour from "../tours/tour.model.js";

export const createBooking = async (req, res) => {
    try {
        const tourId = req.params.id;
        const { guests, date, user } = req.body;

        const tour = await Tour.findById(tourId);
        if (!tour) {
            return res.status(404).json({ message: "Tour not found" });
        }

        const booking = new Booking({
            user,
            tour: tourId,
            guests,
            date
        });

        await booking.save();
        res.status(201).json({ message: "Booking created successfully", booking });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

export const getMyBooking = async (req, res) => {
    try {
        const userId = req.user.id; 
        const bookings = await Booking.find({ user: userId }).populate("tour");

        if (!bookings.length) {
            return res.status(404).json({ message: "No bookings found for this user" });
        }

        res.status(200).json({ message: "Bookings retrieved successfully", bookings });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

export const cancelBooking = async (req, res) => {
    try {
        const bookingId = req.params.bookingId;
        const booking = await Booking.findById(bookingId);
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        booking.status = "canceled";
        res.status(200).json({ message: "Booking canceled successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};
