const proxyService = require('../services/proxyService.js');

exports.getUniversities = async (req, res) => {
  try {
    const country = req.query.country;
    const universities = await proxyService.fetchUniversitiesFromExternalAPI(country);
    res.json(universities);
  } catch (error) {
    res.status(500).send('Error fetching universities');
  }
};
