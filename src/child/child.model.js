const knex = require('../helpers/knex');
const Child = {};

Child.create = function(bodyParent){
    return knex('children').insert(bodyParent);
}

Child.findAll = function(query){
    return knex.select('*').from('children').where(query);
}

Child.find = function(query){
    return Child.findAll(query).first();
}

Child.delete = function(id){
    return knex('children').del().where({id:id});
}

Child.deleteAll = function(){
    return knex('children').del();
}

Child.update = function(id, bodyParent){
    return knex('children').update(bodyParent).where({id:id})
}

module.exports = Child;