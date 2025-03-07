import express from "express";
import {
  handleNewShortURL,
  handleGetURL,
} from "../controllers/urlControllers.js";

const router = express.Router();

router.post("/url", handleNewShortURL);
router.get("/:shortId", handleGetURL);

export default router;
