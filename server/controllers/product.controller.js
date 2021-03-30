const Product = require('../models/product.model');

module.exports = {
    getAllProducts: (req, res) => {
        Product.find({})
            .then( allProducts => res.json( allProducts ))
            .catch( err => res.json({ message: "Something went wrong", error: err }));
    },
    getOneProduct: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then( oneProduct => res.json( oneProduct ))
            .catch( err => res.json({ message: "Something went wrong", error: err }));
    },
    createProduct: (req, res) => {
        Product.create(req.body)
            .then( newProduct => res.json(newProduct))
            .catch( err => res.json({ message: "Something went wrong", error: err }));
    },
    index: (req, res) => {
        res.json({message: "Hello World"})
    }
};