import User from "../models/userModel.js";
import fs from "node:fs/promises";
import path from "node:path";

// Remove uploaded image if saving fails
const removeImage = async (file) => {
  if (file) {
    try {
      await fs.unlink(file.path);
    } catch (error) {
      console.log("Image cleanup failed:", error.message);
    }
  }
};

// ADD USER
export const addUser = async (req, res) => {
  try {
    const { name } = req.body;

    // Name validation
    if (
      typeof name !== "string" ||
      name.trim().length < 3 ||
      name.trim().length > 50
    ) {
      await removeImage(req.file);

      return res.status(400).json({
        message: "Name must contain 3 to 50 characters"
      });
    }

    // Image validation
    if (!req.file) {
      return res.status(400).json({
        message: "Image is required"
      });
    }

    // Save user
    const user = await User.create({
      name: name.trim(),
      image: req.file.filename
    });

    return res.status(201).json({
      message: "User added successfully",
      user
    });

  } catch (error) {
    await removeImage(req.file);

    return res.status(500).json({
      message: "Failed to add user"
    });
  }
};


// GET ALL USERS
export const getUsers = async (req, res) => {
  try {
    const users = await User.find()

    return res.status(200).json(users);

  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch users"
    });
  }
};