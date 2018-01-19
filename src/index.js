const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes');
const body = require('body-parser');

app.listen(3000, function(){console.log('App listening on port 3000')});

app.use(cors());

app.use(body.json());

app.use(body.urlencoded({extended:false}));

app.use('/', router);

app.use(express.static('uploads'));

module.exports = app;