const mongoose = require("mongoose")

const QuoteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "content is required"],
        maxLength:[1000, "Thats not a quote!"],
        minLength:[3,"You need atleast 3 characters"]
    },

    author: {
        type: String,
        required: [true, "Author is required!"],
    },

    quotedOn: {
        type: Date,
    }
}, {timestamps:true});

const Quote = mongoose.model("Quote", QuoteSchema)

module.exports = Quote;