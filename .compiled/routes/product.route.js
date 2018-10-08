'use strict';

var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var product_controller = require('../controllers/product.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);

// routes/products.route.js

router.put('/:id/update', product_controller.product_update);

router.get('/:id', product_controller.product_details);

router.post('/create', product_controller.product_create);

router.delete('/:id/delete', product_controller.product_delete);

module.exports = router;
//# sourceMappingURL=product.route.js.map