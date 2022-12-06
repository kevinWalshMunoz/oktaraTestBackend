const packagesService = require('../services/packagesServices');
 
exports.getAllPackages = async (req, res) => {
  try {
    const packageBox = await packagesService.getAllPackages();
    res.json({ data: packageBox, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createPackage = async (req, res) => {
  try {
    const packageBox = await packagesService.createPackage(req.body);
    res.json({ data: packageBox, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPackageById = async (req, res) => {
  try {
    const packageBox = await packagesService.getPackageById(req.params.id);
    res.json({ data: packageBox, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updatePackage = async (req, res) => {
  try {
    const packageBox = await packagesService.updatePackage(req.params.id, req.body);
    res.json({ data: packageBox, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deletePackage = async (req, res) => {
  try {
    const packageBox = await packagesService.deletePackage(req.params.id);
    res.json({ data: packageBox, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};