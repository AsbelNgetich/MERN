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
    },

     isMotivational:{
        type: Boolean
    },

    popularityLevel:{
        type:Number,
        max:[10, "Quote can't be rated higher than 10"],
        min:[1, "Quote can't be rated less than 1"]
    }


}, {timestamps:true});

const Quote = mongoose.model("Quote", QuoteSchema)

module.exports = Quote;