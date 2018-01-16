
exports.up = function(knex, Promise) {
  return knex.schema.createTable('children', function(child){
      child.increments('id').primary();
      child.string('name').notNull();
      child.integer('age').notNull();      
      child.integer('parentId').notNull();
      child.foreign('parentId').references('parents.id');      
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('children');
};
