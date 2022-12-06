const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const citiesSchema = new Schema({
  name: String,
  cityRoutes: [{ city: String, distance: Number }]
});
 
module.exports = mongoose.model('city', citiesSchema);