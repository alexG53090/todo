
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tasks', function(table){
    table.increments();
    table.string('task');
    table.boolean('complete');
    table.integer('points');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tasks');
};
