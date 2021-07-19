const JokeController = require("../controllers/joke.controller");

module.exports = app => {
    app.get('/api/jokes', JokeController.findAllJokes);
    app.post('/api/jokes/new', JokeController.createNewJoke);
    app.get('/api/jokes/:id', JokeController.findASingleJoke);
    app.put('/api/jokes/:id', JokeController.updateExistingJoke);
    app.delete('/api/jokes/:id', JokeController.deleteAnExistingJoke);
}