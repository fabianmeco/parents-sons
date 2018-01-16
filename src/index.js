const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes');
const body = require('body-parser');

app.listen(3000, function(){
    console.log('App listening on port 3000, go ahead Joel');
})

app.use(body.urlencoded({extended:false}));

app.use(body.json);

app.use(cors());

app.use('/', router);

module.exports = app;