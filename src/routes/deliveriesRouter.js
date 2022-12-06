const express = require('express');
const {
    getBestRoute
} = require('../controllers/deliveriesController');
 
const router = express.Router();
 
router.route('/:destination').get(getBestRoute);
 
module.exports = router;