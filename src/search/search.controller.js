const express = require("express");
const searchService = require("./search.service");

// The search controller holds all end-points used for Requests

const router = express.Router();

// GET
router.get("/", async (req, res) => {
  const { term = "", limit = 1, media = "all" } = req.query;
  const uri = `?term=${term}&media=${media}&limit=${limit}`;
  const data = await searchService.searchTerm(uri);
  res.json(data);
});

module.exports = router;
