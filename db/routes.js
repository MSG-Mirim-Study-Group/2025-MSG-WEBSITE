const express = require('express');
const { submitApplication } = require('./Controller');
const router = express.Router();

router.post('/apply', submitApplication);

module.exports = router;
