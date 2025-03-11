import express from "express";
import { 
  createTour, 
  getTours, 
  getTourById, 
  updateTour, 
  deleteTour,
  addReview
} from "./tour.controller.js";
import upload from "../../config/multer.js";

const router = express.Router();

// CREATE Tour
router.post("/",upload.single("image"), createTour);

// Get all tours
router.get("/", getTours);

// Get single Tour
router.get("/:id", getTourById);

// Update a Tour
router.patch("/:id",upload.single("image"), updateTour);

// Delete Tour
router.delete("/:id", deleteTour);

// Post review for Tour
router.post("/:id/addReview", addReview);

export default router;
