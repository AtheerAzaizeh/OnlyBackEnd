const express = require('express');
const router = express.Router();
const { apiProxy } = require('../services/proxyService');

router.use('/universities', apiProxy);

module.exports = router;

