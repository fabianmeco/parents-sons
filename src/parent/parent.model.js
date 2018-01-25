const knex = require('../helpers/knex');
const Parent = {};

Parent.create = function(bodyParent){
    return knex('parents').insert(bodyParent);
}

Parent.findAll = function(query){
    /* const basicQuery = knex.select('*').from('parents')    
    //receive array formated to execute the query  [fieldName, operator, comparator] to filter overdue, this come from the front
    return basicQuery.where.apply(basicQuery, overdue) */
    return knex.select('*').from('parents').where(query);
}

Parent.find = function(query){
    return Parent.findAll(query).first();
}

Parent.delete = function(id){
    return knex('parents').del().where({id:id});
}

Parent.deleteAll = function(){
    return knex('parents').del();
}

Parent.update = function(id, bodyParent){
    return knex('parents').where({id:id}).update(bodyParent)
}

module.exports = Parent;