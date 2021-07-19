const Quote = require("../models/quotes.model")

module.exports.findAllQuotes = (req,res)=>{
    Quote.find()
        .then(allquotes =>{
            res.json({results:allquotes})
        })
        .catch(err => {
            res.json({message:"There's an erro", error:err})
        })
}

//module.exports.createQuote = 