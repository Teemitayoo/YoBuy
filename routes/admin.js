const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');
const isAdmin = require('../middleware/is-admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', isAuth, isAdmin, adminController.getAddProduct);

// /admin/products => GET
router.get('/products', isAuth, isAdmin, adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', isAuth, isAdmin, adminController.postAddProduct);

router.get(
    '/edit-product/:productId',
    isAuth,
    isAdmin,
    adminController.getEditProduct
);
router.post('/edit-product', isAuth, isAdmin, adminController.postEditProduct);
router.post(
    '/delete-product',
    isAuth,
    isAdmin,
    adminController.postDeleteProduct
);

module.exports = router;
