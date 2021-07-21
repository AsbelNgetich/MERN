const Product = require("../models/Product.model");

//return all Products
module.exports.findAllProducts=(req, res)=> {
    Product.find()
        .then(allProducts=>res.json({Products: allProducts}))
        .catch(err => res.json({message: "something went wrong", error: err}))
}

//return a single Product
module.exports.findASingleProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneProduct => res.json({ Product: oneProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


//create a Product
module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => res.json({ Product: newlyCreatedProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


//find and update a Product
module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => res.json({ Product: updatedProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}