const express = require("express");

const favoritesService = require("./favorites.service");

const router = express.Router();

// The favorites controller holds all requests made to each end-point

// GET
router.get("/", (req, res) => {
  const data = favoritesService.findAll();

  res.json(data);
});

// GET
router.get("/:id", (req, res) => {
  const data = favoritesService.findOne(req.params.id);

  // error
  if (!data) {
    res.status(404).json({
      message: "Could not find favorite",
    });
  }

  res.json(data);
});

// POST
router.post("/", (req, res) => {
  const data = favoritesService.create(req.body);

  // error
  if (!data) {
    res.status(400).json({
      message: "Could not create",
    });
  }

  res.json(data);
});

// DELETE
router.delete("/delete/:id", (req, res) => {
  const data = favoritesService.remove(req.params.id);

  // error
  if (!data) {
    res.status(400).json({
      message: "Could not delete",
    });
  }

  res.json(data);
});

module.exports = router;
