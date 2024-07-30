const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.post('/send', chatController.sendMessage);

router.get('/history/:userId1/:userId2', chatController.getMessageHistory);

module.exports = router;