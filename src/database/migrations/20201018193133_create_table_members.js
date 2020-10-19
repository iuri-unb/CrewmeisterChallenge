
exports.up = function(knex) {
    return knex.schema.createTable('members', function(table){
        table.increments('id').notNullable()
        table.integer('userId').notNullable()
        table.text('name').notNullable()
        table.text('image').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('members')
};
