const config = require('config');
const multer = require('multer');
const aws = require('aws-sdk');
const multers3 = require('multer-s3');

const s3 = new aws.S3(config.s3);

const uploads = multer({
    storage: multers3({
        s3: s3,
        bucket: 'fabianparentsfiles',                
        metadata: function(req, file, cb){
            cb(null, {fieldname: file.fieldname})
        },
        key: function(req, file, cb){
            cb(null, +Date.now().toString()+'.'+mime.getExtension(file.mimetype))
        }
    })
})

exports.loop = function(){
    console.log("works")
}