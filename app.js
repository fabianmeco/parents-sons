
const express = require('express');
const body = require('body-parser');
const cors = require('cors');
const config = require('config')

const app = express();

const router = require('./src/routes');
const loopUpload = require('./src/uploadFile')


app.listen(config.serverport, function(){console.log('App listening on port '+config.serverport)});

const uploadFile = setInterval(()=>loopUpload.loopUploadFile(), 300000);

app.use(cors());

app.use(body.json());

app.use(body.urlencoded({extended:false}));

app.use('/', router);

app.use(express.static('uploads'));



module.exports = app;