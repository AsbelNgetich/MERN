const QuoteController = require("../controllers/quotes.controller");

module.exports = app=> {
    app.get("/api/quotes", QuoteController.findAllQuotes)
    
}