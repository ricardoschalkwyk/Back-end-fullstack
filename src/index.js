const app = require("./app");

// Listen on PORT
const port = process.env.PORT || 5050;

app.listen(port, () => console.log(`Listening: http://localhost:${port}`));
