const axios = require('axios');

const fetchFromExternalAPI = async (endpoint) => {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};

module.exports = { fetchFromExternalAPI };