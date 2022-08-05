const { v4: uuidv4 } = require("uuid");

// The favorites service contols data given to the favorites end-point and what to do with it

let favorites = [];

// Return all current favorites
function findAll() {
  return favorites;
}

// Return only 1 favorite
function findOne(id) {
  const favorite = favorites.find((item) => item.id === id);

  return favorite;
}

// Creates a newFavorite when a POST request is made
function create(data) {
  const id = uuidv4();

  // error
  if (!data) {
    return null;
  }

  const favorite = { ...data, id };

  favorites.push(favorite);

  return favorite;
}

// Updates a chosen favorite
function update(id, data) {
  const index = favorites.findIndex((favorite) => favorite.id === id);

  // error
  if (index === -1) {
    return null;
  }

  const favorite = favorites[index];

  const updatedFavorite = { ...favorite, ...data };

  favorites[index] = updatedFavorite;

  return updatedFavorite;
}
// Removes a favorite
function remove(id) {
  const index = favorites.findIndex((favorite) => favorite.id === id);

  // error
  if (index === -1) {
    return null;
  }

  const deletedItem = favorites.splice(index, 1);

  return { favorites, deletedItem: deletedItem[0] };
}

module.exports = {
  findAll,
  findOne,
  create,
  update,
  remove,
};
