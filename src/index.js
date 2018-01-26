
const express = require('express');
const body = require('body-parser');
const cors = require('cors');

const app = express();

const router = require('./routes');
const loop = require('./loop')


app.listen(3000, function(){console.log('App listening on port 3000')});

app.use(cors());

app.use(body.json());

app.use(body.urlencoded({extended:false}));

app.use('/', router);

app.use(express.static('uploads'));

const uploadFile = setTimeout(()=>{console.log("works")}, 3000);

module.exports = app;