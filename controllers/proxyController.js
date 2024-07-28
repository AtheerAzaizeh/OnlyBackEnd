const proxyService = require('../services/proxyService');

exports.getUniversities = async (req, res) => {
    try {
        const { country } = req.query;
        const universities = await proxyService.fetchUniversities(country);
        res.json(universities);
    } catch (error) {
        console.error('Error in proxyController:', error.message);
        res.status(500).json({ error: 'An error occurred while fetching universities.' });
    }
};
