
const parentModel = require('./parent.model');

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
    return parentModel.findAll({})
        .then(values => res.json(values))
        .catch(err => res.status(500).send({ name: "Internal error", message: err.message }));
}

exports.getOneMiddleware = function (req, res, next) {
    return parentModel.find(req.params.person_id)
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
    return res.json(req.parent)
}

exports.put = function (req, res) {

}

exports.delete = function (req, res) {
    return parentModel.delete(req.parent.id)
        .then(parent => res.json(req.parent))
        .catch(err => res.status(500).send([{ name: "Internal error", message: err.message }]))
}