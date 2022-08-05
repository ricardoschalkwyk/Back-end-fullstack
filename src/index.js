const app = require("./app");

// Listen on PORT
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => console.log(`Listening: http://localhost:${PORT}`));
