const express = require('express');
const { submitApplication } = require('./controller');
const router = express.Router();

router.post('/', submitApplication);

module.exports = router;
