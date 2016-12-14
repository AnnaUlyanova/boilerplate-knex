
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table) {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.string('title')
    table.text('content')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts')
};
