const express = require('express');
const router = express.Router();
const { apiProxy } = require('../services/proxyService');

router.use('/', apiProxy);

module.exports = router;
