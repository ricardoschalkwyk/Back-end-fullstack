const itunesService = require("../services/itunes.service");

// The search service can determine what is sent/usable to your front-end

async function searchTerm(url = "/") {
  const { results = [] } = await itunesService.searchTerm(url);

  // Loops through reuslts given by the itunes API
  const result = results.map((item, index) => {
    // Once it is looped it will return these items
    return {
      id: index + 1,
      image: item.artworkUrl100,
      artistName: item.artistName,
      trackName: item.trackName,
      trackId: item.trackId,
    };
  });

  return { result, all: results };
}

module.exports = { searchTerm };
