import mongoose from "mongoose";

const Schema = mongoose.Schema;

const urlSchema = new Schema(
  {
    shortID: {
      type: String,
      unique: true,
      required: true,
    },
    longURL: {
      type: String,
      required: true,
    },
    urlHistory: [{ timestamp: { type: Number } }],
  },
  { timestamps: true }
);

const URL = mongoose.model("url", urlSchema);

export default URL;
