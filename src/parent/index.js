
const express = require('express');
const router = express.Router();
const instanceRouter = express.Router();
const parentValidator = require('./parent.validator');
const middlewares = require('../middlewares');
const parentController = require('./parent.controller');
const children = require('../child');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/images/')
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + req.parent.nit + '.jpg')
    }
})
const uploads = multer({storage: storage});


router.post('/', parentController.post);

router.get('/', parentController.get);

router.use('/:person_id', parentController.getOneMiddleware, instanceRouter);

instanceRouter.get('/', parentController.getOne);

instanceRouter.put('/', uploads.single('photo'), parentController.put);

instanceRouter.delete('/', parentController.delete);

instanceRouter.use('/child', children);

module.exports = router;
