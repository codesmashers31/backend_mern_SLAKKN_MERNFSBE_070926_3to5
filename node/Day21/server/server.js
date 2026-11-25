import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import cors from "cors";
import dotenv from "dotenv";
import path from "node:path";

import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

// Make uploaded images accessible
app.use(
  "/uploads",
  express.static(path.resolve("uploads"))
);

// Mount routes
app.use("/api/users", userRoutes);

// Multer error handling middleware
app.use((error, req, res, next) => {

  if (error instanceof multer.MulterError) {
    return res.status(400).json({
      message:
        error.code === "LIMIT_FILE_SIZE"
          ? "Image size must not exceed 2 MB"
          : error.message
    });
  }

  if (error.message === "Only JPG, PNG and WEBP images are allowed") {
    return res.status(400).json({
      message: error.message
    });
  }

  return res.status(500).json({
    message: "Server error"
  });
});

await connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});