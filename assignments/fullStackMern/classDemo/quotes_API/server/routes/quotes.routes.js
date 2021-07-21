const QuoteController = require("../controllers/quotes.controller");

module.exports = app=> {
    app.get("/api/quotes", QuoteController.findAllQuotes)
    app.post("/api/quotes/create", QuoteController.createQuote)
    app.get("/api/quotes/:quoteId", QuoteController.findOneQuote)
    app.put("/api/quotes/:id", QuoteController.updateQuote)
    app.get("/api/quotes/find/random", QuoteController.findRandomQuote)
    app.delete("/api/quotes/:quoteId", QuoteController.deleteQuote)
}