const express = require('express');
const router = express.Router();
const childController = require('./child.controller');

router.post('/', childController.post);

router.delete('/:id', childController.delete);

module.exports = router;