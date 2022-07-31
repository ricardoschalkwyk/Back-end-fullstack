const itunesService = require("../services/itunes.service");

async function searchTerm(url = "/") {
  const data = await itunesService.searchTerm(url);
  const result = data.results.map((item) => {
    return { artistName: item.artistName, trackName: item.trackName };
  });

  return { result };
}

module.exports = { searchTerm };
