
const express = require('express');
const router = express.Router();
const instanceRouter = express.Router();
const parentValidator = require('./parent.validator');
const middlewares = require('../middlewares');
const parentController = require('./parent.controller');
const children = require('../child');
const multer = require('multer');



router.post('/',  parentController.post);

router.get('/', parentController.get);

router.use('/:person_id', parentController.getOneMiddleware, instanceRouter);

instanceRouter.get('/', parentController.getOne);

instanceRouter.put('/', multer({ dest: './uploads/' }).any(), parentController.put);

instanceRouter.delete('/', parentController.delete);

instanceRouter.use('/child', children);

module.exports = router;
