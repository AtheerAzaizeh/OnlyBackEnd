const db = require('../config/db');

async function findAll() {
    const [rows] = await db.execute('SELECT * FROM personal_details');
    return rows;
}

async function findById(userId) {
    const [rows] = await db.execute('SELECT * FROM personal_details WHERE user_id = ?', [userId]);
    return rows[0];
}

module.exports = { findAll, findById };
