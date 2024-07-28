
const axios = require('axios');

const BASE_URL = 'https://universities.hipolabs.com';

exports.fetchUniversities = async (country) => {
    try {
        const response = await axios.get(`${BASE_URL}/search`, {
            params: { country }
        });
        return response.data;
    } catch (error) {
        console.error('Error in proxyService:', error.message);
        throw new Error('Failed to fetch universities');
    }
};
