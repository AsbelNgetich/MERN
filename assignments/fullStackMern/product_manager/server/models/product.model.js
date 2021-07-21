const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[true, "Title is required"],
        minLength:[2, "Title needs to be atleast 2 characters"]
    },
    price: {
        type: Number,
        required:[true, "Price is required"]
    },
    description:{
        type: String
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;