import { nanoid } from "nanoid";
import URL from "../models/urlModel.js";

const handleNewShortURL = async (req, res) => {
  console.log("📢 Received request body:", req.body);
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });

  const shortID = nanoid(8);
  await URL.create({
    shortID: shortID,
    longURL: body.url,
    urlHistory: [],
  });

  return res.status(200).json({ id: shortID });
};

const handleGetURL = async (req, res) => {
  const shortID = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    { shortID },
    { $push: { urlHistory: { timestamp: Date.now() } } }
  );

  if (!entry) {
    return res.status(404).json({ error: `Short URL not found` });
  }

  res.redirect(entry.longURL);
};

export { handleNewShortURL, handleGetURL };
