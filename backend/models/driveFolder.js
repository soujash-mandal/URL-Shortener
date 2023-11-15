// models/url.js
const mongoose = require("mongoose");

const driveFolderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    level: {
      type: Number,
      default: 0,
    },
    sharedAll: {
      type: Boolean,
      default: false,
    },
    parentFolder: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DriveFolder", driveFolderSchema);
