const fetch = require('node-fetch');

exports.fetchUniversitiesFromExternalAPI = async (country) => {
  try {
    const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch universities');
  }
};