const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/index', ProductController.index);
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/products/:id', ProductController.getOneProduct);
    app.post('/api/products', ProductController.createProduct);
    app.put('/api/products/:id', ProductController.editProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);
};