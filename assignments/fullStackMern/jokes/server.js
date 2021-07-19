const express = require("express");
const app = express();

require("./server/config/jokes.config")

app.use(express.json(), express.urlencoded({ extended: true }));


// const AllMyJokeRoutes = require("./server/routes/user.routes");
// AllMyJokeRoutes(app);

//this is the same as the code above
require("./server/routes/joke.routes")(app)

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
