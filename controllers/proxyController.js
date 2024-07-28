const proxyModel = require('../services/proxyService');

const getUniversities = async (req, res) => {
  try {
    const country = req.query.country;
    if (!country) {
      return res.status(400).json({ error: 'Country query parameter is required' });
    }

    const data = await proxyModel.fetchFromExternalAPI(`https://universities.hipolabs.com/search?country=${country}`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getUniversities };
