const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[true, "Title is required"],
        minLength:[2, "Title needs to be atleast 2 characters"]
    },
    price: {
        type: Number,
        required:[true, "Price is required"],
        min:[0.01,"Price can't be less than zero"]
    },
    description:{
        type: String,
        required:[true, "Description is required"]
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;