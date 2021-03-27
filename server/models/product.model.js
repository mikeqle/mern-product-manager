const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
        title: {
            type: String,
            required: [true, "Your product needs a title"],
            minlength: [ 2, "Your product title needs to have at least 2 characters"]
        },
        price: {
            type: Number,
            required: [true, "Your product needs a price"],
            min: [0, "You can't have negative price"]
        },
        description: {
            type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);