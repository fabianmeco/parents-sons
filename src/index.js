
const express = require('express');
const body = require('body-parser');
const cors = require('cors');

const app = express();

const router = require('./routes');
const loopUpload = require('./uploadFile')


app.listen(3000, function(){console.log('App listening on port 3000')});

const uploadFile = setInterval(()=>loopUpload.loopUploadFile(), 300000);

app.use(cors());

app.use(body.json());

app.use(body.urlencoded({extended:false}));

app.use('/', router);

app.use(express.static('uploads'));



module.exports = app;