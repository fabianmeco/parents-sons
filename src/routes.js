const express = require('express');
const router = express.Router();

const people = require('./parent');

router.use('/people', people);

module.exports = router;