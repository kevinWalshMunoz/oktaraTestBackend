const Graph = require('node-dijkstra');
const citiesService = require('../services/citiesServices');



async function createCitiesGraph() {
  try {
    const graph = new Graph();
    const cities = await citiesService.getAllCities();
    cities.forEach(city => {
      const routesJson = {};
      city.cityRoutes.forEach(route => {
        routesJson[route.city] = route.distance;
      })
      graph.addNode(city.name, routesJson);
    });
    return graph;
  } catch (err) {
    return err;
  }
};

exports.getBestRoute = async (req, res) => {
  try {
    const graph = await createCitiesGraph();
    const bestRoute = graph.path('San Jose', req.params.destination, { cost: true });
    res.json({ data: bestRoute, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};