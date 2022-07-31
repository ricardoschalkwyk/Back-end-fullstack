const express = require("express");
const searchService = require("./search.service");

const router = express.Router();

router.get("/", async (req, res) => {
  const { term = "", limit = 25, media = "all" } = req.query;
  const uri = `?term=${term}&media=${media}&limit=${limit}`;
  const data = await searchService.searchTerm(uri);
  res.json(data);
});

router.post("/", async (req, res) => {
  try {
    res.json(req.body);
  } catch (error) {
    console.log("Could not post request");
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    res.json({});
  } catch (error) {
    console.log("Could not update");
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    res.json({});
  } catch (error) {
    console.log("Could not delete");
  }
});

module.exports = router;
