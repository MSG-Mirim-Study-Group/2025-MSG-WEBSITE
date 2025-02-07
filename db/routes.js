const express = require('express');
const { submitApplication } = require('./controller');
const router = express.Router();

router.post('/apply', submitApplication);

module.exports = router;
