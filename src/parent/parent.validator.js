const joi = require('joi');

exports.post = joi.object().keys({
    name: joi.string().required(),
    nit: joi.number().integer().required()
    

});

