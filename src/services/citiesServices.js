const citiesModel = require('../models/citiesModel');

 
exports.createCity = async (city) => {
  return await citiesModel.create(city);
};

exports.getAllCities = async () => {
  return await citiesModel.find();
};

