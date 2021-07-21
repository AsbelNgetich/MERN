const ProductController = require("../controllers/product.controller");

module.exports = app => {
    app.get('/api/products', ProductController.findAllProducts);
    app.post('/api/products/new', ProductController.createNewProduct);
    app.get('/api/products/:id', ProductController.findASingleProduct);
    app.put('/api/products/:id', ProductController.updateExistingProduct);
    app.delete('/api/products/:id', ProductController.deleteAnExistingProduct);
}