
const childModel = require('./child.model');

exports.post = function (req, res) {
    return childModel.create({ name: req.body.name, age: req.body.age, parentId: req.parent.id })
        .then(value => res.json(value))
        .catch(err => res.status(500).send({ "name": "Internal error", "message": err.message }));
}

exports.delete = function (req, res) {
    return childModel.delete(id)
        .then(value => res.json(value))
        .catch(err => res.status(500).send({ "name": "Internal error", "message": err.message }));
}
