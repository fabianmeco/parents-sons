const express = require('express');
const router = express.Router();

const people = require('./parent');

router.use('/parent', people);

module.exports = router;