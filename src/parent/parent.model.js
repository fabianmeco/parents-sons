const knex = require('../helpers/knex');
const Parent = {};

Parent.create = function(bodyParent){
    return knex('parents').insert(bodyParent);
}

Parent.findAll = function(query, limit, offset){
   if(limit){
        return knex.select('*').from('parents').where(query).limit(limit).offset(offset);   
   }
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