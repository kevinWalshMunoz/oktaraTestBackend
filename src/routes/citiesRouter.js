const express = require('express');
const {
    createCity,
    getAllCities
} = require('../controllers/citiesController');
 
const router = express.Router();
 
router.route('/').post(createCity).get(getAllCities);
 
module.exports = router;