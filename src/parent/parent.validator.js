const joi = require('joi');
const moment = require('moment');

exports.post = joi.object().keys({
    name: joi.string().required(),
    nit: joi.number().integer().required(),
    gender: joi.string().allow('M', 'F').required(),
    dateOfBirth: joi.date().min(moment().subtract(60, 'years').format()).max(moment().subtract(18, 'years').format()).required()    
});

