const mongoose = require("mongoose")

const JokeSchema = new mongoose.Schema({
    setup:{
        type: String,
        required:[true, "Joke setup is required"],
        minLength:[5, "Joke setup must be atleast 5 characters"]
    },
    punchline: {
        type: String      
    }
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;

