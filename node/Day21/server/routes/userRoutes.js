import express from "express";

import {
  addUser,
  getUsers
} from "../controllers/userController.js";

import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// POST - Upload image and add user
router.post(
  "/add",
  upload.single("image"),
  addUser
);

// GET - Get all users
router.get("/all", getUsers);

export default router;