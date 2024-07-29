const db = require('../config/db');

async function findAllByUserId(userId) {
    const [rows] = await db.execute('SELECT * FROM work_experience WHERE user_id = ?', [userId]);
    return rows;
}

module.exports = { findAllByUserId };
