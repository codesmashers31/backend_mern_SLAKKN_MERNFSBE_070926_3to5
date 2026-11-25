import multer from "multer";
import fs from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";

// Create uploads folder
const uploadPath = path.resolve("uploads");

fs.mkdirSync(uploadPath, { recursive: true });

// Allowed image types
const allowedTypes = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp"
};

// Storage configuration
const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },

  filename: (req, file, cb) => {
    const uniqueName =
      randomUUID() + allowedTypes[file.mimetype];

    cb(null, uniqueName);
  }

});

// File validation
const fileFilter = (req, file, cb) => {

  if (allowedTypes[file.mimetype]) {
    cb(null, true);
  } else {
    cb(new Error("Only JPG, PNG and WEBP images are allowed"));
  }

};

// Multer configuration
const upload = multer({
  storage: storage,

  fileFilter: fileFilter,

  limits: {
    fileSize: 2 * 1024 * 1024,
    files: 1
  }
});

export default upload;