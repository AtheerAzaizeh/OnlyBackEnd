const express = require('express');
const router = express.Router();
const proxyController = require('../controllers/proxyController.js');


router.get('/universities', proxyController.getUniversities);

module.exports = router;