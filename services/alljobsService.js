const db = require('../config/db');
const alljobs = async () => {
    try {
        const [rows] = await db.query('SELECT * FROM job_list');
        return rows;
    } catch (error) {
        console.error('Error in alljobsService:', error.message);
        throw error;
    }
};

module.exports = { alljobs };
