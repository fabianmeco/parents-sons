const express = require('express');
const route = express.Router();

const people = require('./parent');

router.use('/people', people);

module.exports = router;