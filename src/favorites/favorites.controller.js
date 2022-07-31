const express = require("express");

const favoritesService = require("./favorites.service");

const router = express.Router();

router.get("/", (req, res) => {
  const data = favoritesService.findAll();

  res.json(data);
});

router.get("/:id", (req, res) => {
  const data = favoritesService.findOne(Number(req.params.id));

  // error
  if (!data) {
    res.status(404).json({
      message: "Could not find favorite",
    });
  }

  res.json(data);
});

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

router.put("/update/:id", (req, res) => {
  const data = favoritesService.update(Number(req.params.id), req.body);

  // error
  if (!data) {
    res.status(400).json({
      message: "Could not update",
    });
  }

  res.json(data);
});

router.delete("/delete/:id", (req, res) => {
  const data = favoritesService.remove(Number(req.params.id));

  // error
  if (!data) {
    res.status(400).json({
      message: "Could not delete",
    });
  }

  res.json(data);
});

module.exports = router;
