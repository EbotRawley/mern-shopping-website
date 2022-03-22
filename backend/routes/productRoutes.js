const express = require('express');
const router = express.Router();

const {
    getAllProducts, 
    getProductById
} = require('../controller/productControllers');

// decription: GET all products from db
//routes GEt /api/products
//access public
router.get('/',(getAllProducts) => {
    
});

// decription: GET a product by id from db
//routes GEt /api/products/:id
//access public
router.get('/:id', (getProductById) => {
    
});

module.exports = router;