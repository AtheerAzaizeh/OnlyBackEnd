const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (user) => {
  return reguserModel.registerUser(user);
};

const loginUser = async (email, password, ipAddress) => {
  try {
    const [user] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

    if (!user.length) {
      await db.query('INSERT INTO login_attempts (ip_address, success) VALUES (?, ?)', [ipAddress, false]);
      throw new Error('Invalid email or password');
    }

    const isMatch = await bcrypt.compare(password, user[0].password);
    if (!isMatch) {
      await db.query('INSERT INTO login_attempts (user_id, ip_address, success) VALUES (?, ?, ?)', [user[0].user_id, ipAddress, false]);
      throw new Error('Invalid email or password');
    }

    const token = jwt.sign({ userId: user[0].user_id, role: user[0].role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    await db.query('INSERT INTO login_attempts (user_id, ip_address, success) VALUES (?, ?, ?)', [user[0].user_id, ipAddress, true]);

    return { token, role: user[0].role, user_id: user[0].user_id };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  registerUser,
  loginUser,
};