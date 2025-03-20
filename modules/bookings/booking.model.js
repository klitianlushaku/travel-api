<<<<<<< HEAD
import mongoose from "mongoose";
=======
     import mongoose from "mongoose"
>>>>>>> 6fa8b2b4619084cdadc96b7435af5b5875c9b593

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tour: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tour",
      required: true,
    },
    guests: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "confiremd", "canceled"],
      default: "pending",
    },
  },
  { timestamps: true }
);
const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
