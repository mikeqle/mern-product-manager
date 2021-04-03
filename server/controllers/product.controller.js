const Product = require('../models/product.model');

module.exports = {
    getAllProducts: (req, res) => {
        Product.find({})
            .then( allProducts => res.json( allProducts ))
            .catch( err => res.json({ message: "Something went wrong on getAllProducts", error: err }));
    },
    getOneProduct: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then( oneProduct => res.json( oneProduct ))
            .catch( err => res.json({ message: "Something went wrong on getOneProduct", error: err }));
    },
    createProduct: (req, res) => {
        Product.create(req.body)
            .then( newProduct => res.json(newProduct))
            .catch( err => res.json({ message: "Something went wrong on createProduct", error: err }));
    },
    editProduct: (req, res) => {
        Product.findByIdAndUpdate( req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        .then((updatedProduct) => res.json(updatedProduct))
        .catch(err => res.json({ message: "Something went wrong on updateProduct", error: err }));
    },
    deleteProduct: (req, res) => {
        console.log(req.params.id);

        Product.findByIdAndDelete(req.params.id)
            .then((deletedProduct) => res.json(deletedProduct))
            .catch(err => res.json({ message: "Something went wrong on deleteProduct", error: err }));
    },
    index: (req, res) => {
        res.json({message: "Hello World"})
    }
};