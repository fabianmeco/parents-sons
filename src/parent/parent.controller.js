"use strict"

const parentModel = require('./parent.model');

exports.post = function (req, res) {
    return parentModel.create(req.body)
        .then(parent => res.json(parent))
        .catch(err => res.status(500).send([{ name: "Internal error", message: err.message }]))
}

exports.get = function (req, res) {

}

exports.getOneMiddleware = function(req, res, next){
    
}

exports.getOne = function(req, res){
   
}

exports.put = function(req, res){
   
}

exports.delete = function(req, res){
    
}