import express from "express"
import { createUser, deleteUser, getUsers, getUsersById, uptadeUser } from "./user.controller.js"

const router = express.Router()

router.get("/getAllUsers" , getUsers)
router.post("/createUsers", createUser )
router.get("/getUsersById/:id", getUsersById)
router.put("/uptadeUser/:id", uptadeUser)
router.delete("/deleteUser/:id", deleteUser)


export default router