
const parentModel = require('./parent.model');
const childModel = require('../child/child.model');
const multer = require('multer');
const upload = multer({dest: `uploads/`});



exports.post = function (req, res) {
    return parentModel.find({ nit: req.body.nit })
        .then(function (found) {
            if (found) {
                return res.status(422).send([{ name: "nit", message: "Nit already registered" }]);
            }
            return parentModel.create(req.body)
                .then(parent => res.json(parent))
        })
        .catch(err => res.status(500).send([{ name: "Internal error", message: err.message }]));
}

exports.get = function (req, res) {
    return parentModel.findAll()
        .then(values => res.json(values))
        .catch(err => res.status(500).send({ name: "Internal error", message: err.message }));
}

exports.getOneMiddleware = function (req, res, next) {
    return parentModel.find({ id: req.params.person_id })
        .then(found => {
            if (found) {
                req.parent = found;

                return next();
            }
            return res.status(404);
        })
        .catch(err => res.status(500).send([{ name: "Internal error", message: err.message }]))
}

exports.getOne = function (req, res) {
    return childModel.findAll({ parentId: req.parent.id })
        .then(children => {
            req.parent.children = children;
            return res.json(req.parent)
        })
        .catch(err => res.status(500).send([{ name: "Internal error", message: err.message }]))
}
exports.put = function (req, res) {
    if (req.file) {
        req.body.photo = req.file.location;       
    }
    return parentModel.update(req.parent.id, req.body)
        .then(value => {
            return parentModel.find({id: req.parent.id})               
        })
        .then(parentFound => {
            req.parent = parentFound;
            return childModel.findAll({ parentId: req.parent.id })
                
        })
        .then(children => {
            req.parent.children = children;
            return res.json(req.parent)
        })
        .catch(err => res.status(500).send([{ name: "Internal error", message: err.message }]))
}

exports.delete = function (req, res) {
    return parentModel.delete(req.parent.id)
        .then(parent => res.json(req.parent))
        .catch(err => res.status(500).send([{ name: "Internal error", message: err.message }]))
}