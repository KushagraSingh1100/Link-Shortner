const express = require("express");
const {
  handleNewShortURL,
  handleGetURL,
} = require("../controllers/urlControllers");
const router = express.Router();

router.post("/url", handleNewShortURL);
router.get("/:shortId", handleGetURL);

module.exports = router;
