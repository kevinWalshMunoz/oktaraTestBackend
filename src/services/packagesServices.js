const packagesModel = require('../models/packagesModel');
 
exports.getAllPackages = async () => {
  return await packagesModel.find();
};
 
exports.createPackage = async (packageBox) => {
  return await packagesModel.create(packageBox);
};

exports.getPackageById = async (id) => {
  return await packagesModel.findById(id);
};
 
exports.updatePackage = async (id, packageBox) => {
  return await packagesModel.findByIdAndUpdate(id, packageBox);
};
 
exports.deletePackage = async (id) => {
  return await packagesModel.findByIdAndDelete(id);
};