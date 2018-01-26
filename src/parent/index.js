
const express = require('express');
const config = require('config');
const multer = require('multer');
const aws = require('aws-sdk');
const multers3 = require('multer-s3');
const mime = require('mime');

const parentValidator = require('./parent.validator');
const middlewares = require('../middlewares');
const parentController = require('./parent.controller');
const children = require('../child');


const router = express.Router();
const instanceRouter = express.Router();

const s3 = new aws.S3(config.s3);


const uploads = multer({
    storage: multers3({
        s3: s3,
        bucket: 'fabianparentsfiles',                
        metadata: function(req, file, cb){
            cb(null, {fieldname: file.fieldname})
        },
        key: function(req, file, cb){
            cb(null, 'images/'+Date.now().toString()+'.'+mime.getExtension(file.mimetype))
        }
    })
})


router.post('/',  parentController.post);

router.get('/', parentController.get);

router.use('/:person_id', parentController.getOneMiddleware, instanceRouter);

instanceRouter.get('/', parentController.getOne);

instanceRouter.put('/', uploads.single('photo'), parentController.put);

instanceRouter.delete('/', parentController.delete);

instanceRouter.use('/child', children);

module.exports = router;
