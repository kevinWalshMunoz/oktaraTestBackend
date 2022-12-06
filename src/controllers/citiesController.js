const citiesService = require('../services/citiesServices');
 
exports.createCity = async (req, res) => {
  try {
    const city = await citiesService.createCity(req.body);
    res.json({ data: city, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllCities = async (req, res) => {
  try {
    const cities = await citiesService.getAllCities();
    res.json({ data: cities, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};