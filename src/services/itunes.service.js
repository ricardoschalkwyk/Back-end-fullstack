const fetch = require("node-fetch");

const BASE_URL = "https://itunes.apple.com/search";

async function searchTerm(url = "/") {
  try {
    const res = await fetch(BASE_URL + url);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}

module.exports = { searchTerm };
