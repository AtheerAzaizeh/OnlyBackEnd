const userService = require('../services/userService');
exports.getProfile = async (req, res) => {
    const { userId } = req.params;
    try {
      const user = await userService.getUserById(userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

exports.updateProfile = async (req, res) => {
    const { userId } = req.params;
    try {
      const user = await userService.updateUser(userId, req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
