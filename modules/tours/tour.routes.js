import express from "express";
import {
  createTour,
  getTours,
  getTourById,
  deleteTour,
  updateTour,
  addReview,
} from "./tour.controller.js";
import upload from "../../config/multer.js";

const router = express.Router();

// CREATE Tour
<<<<<<< HEAD
router.post("/", upload.single("image"), createTour);
=======
router.post("/",upload.single("image"), createTour);
>>>>>>> 6fa8b2b4619084cdadc96b7435af5b5875c9b593

// Get all tours
router.get("/", getTours);

router.post("/:tourId/addReview", addReview);

<<<<<<< HEAD
// // Get single Tour
router.get("/:tourId", getTourById);
=======
// Update a Tour
router.patch("/:id",upload.single("image"), updateTour);
>>>>>>> 6fa8b2b4619084cdadc96b7435af5b5875c9b593

// // Update a Tour
router.patch("/:tourId", upload.single("image"), updateTour);

// // Delete Tour
router.delete("/:tourId", deleteTour);
export default router;
