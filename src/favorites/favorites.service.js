let favorites = [];

function findAll() {
  return favorites;
}

function findOne(id) {
  const favorite = favorites.find((item) => item.id === id);

  return favorite;
}

function create(data) {
  const id = favorites.length + 1;

  // error
  if (!data) {
    return null;
  }

  const favorite = { ...data, id };

  favorites.push(favorite);

  return favorite;
}

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
