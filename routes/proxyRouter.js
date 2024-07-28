const express = require('express');
const router = express.Router();
const proxyController = require('../controllers/proxyController');

router.get('/universities', proxyController.getUniversities);

module.exports = router;
