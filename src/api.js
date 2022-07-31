const express = require("express");

const searchController = require("./search/search.controller");
const favoritesController = require("./favorites/favorites.controller");

const router = express.Router();

router.use("/search", searchController);
router.use("/favorites", favoritesController);

module.exports = router;
