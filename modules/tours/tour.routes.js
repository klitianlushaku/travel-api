import express from "express";
import { 
  createTour, 
  getTours, 
  getTourById, 
  updateTour, 
  deleteTour 
} from "./tour.controller.js";

const router = express.Router();

// CREATE Tour
router.post("/", createTour);

// Get all tours
router.get("/", getTours);

// Get single Tour
router.get("/:id", getTourById);

// Update a Tour
router.patch("/:id", updateTour);

// Delete Tour
router.delete("/:id", deleteTour);

export default router;
