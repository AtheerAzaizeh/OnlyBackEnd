const bcrypt = require('bcrypt');
const db = require('../config/db');

const reguserModel = {
  async registerUser(user) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const query = 'INSERT INTO users (username, password, email, role) VALUES (?, ?, ?, ?)';
    const values = [
      user.username,
      hashedPassword,
      user.email,
      user.role
    ];
    return db.execute(query, values);
  }
};

module.exports = reguserModel;
