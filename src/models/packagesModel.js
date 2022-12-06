const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const packageSchema = new Schema({
  owner: String,
  description: String,
  storageLocation: String,
  status: String
});
 
module.exports = mongoose.model('package', packageSchema);