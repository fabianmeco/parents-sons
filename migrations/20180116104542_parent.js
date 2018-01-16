
exports.up = function(knex, Promise) {
    return knex.schema.createTable('parents', function(parent){
        parent.increments('id').primary();
        parent.string('name').notNull();    
        parent.integer('nit').notNull();
        parent.enum('genre', ['M', 'F']).notNull();
        parent.dateTime('dateOfBirth').notNull();
        parent.string('photo').nullable();        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('parents');
};
