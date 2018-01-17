const knex = require('../helpers/knex');
const Parent = {};

Parent.create = function(bodyParent){
    return knex('parents').insert(bodyParent);
}

Parent.findAll = function(overdue){
    const basicQuery = knex.select('*').from('parents')    
    //receive array formated to execute the query  [fieldName, operator, comparator] to filter overdue, this come from the front
    return basicQuery.where.apply(basicQuery, overdue)
}

Parent.find = function(id){
    Parent.findAll({id:id}).first();
}

Parent.delete = function(id){
    return knex('parents').del().where({id:id});
}

Parent.update = function(id, bodyParent){
    return knex('parents').update(bodyParent).where({id:id})
}

module.exports = Parent;