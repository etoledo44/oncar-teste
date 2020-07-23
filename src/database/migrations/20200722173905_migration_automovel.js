
exports.up = function(knex) {
    return knex.schema
        .createTable('automoveis', function (table) {
            table.increments('id');
            table.string('veiculo', 255).notNullable();
            table.string('marca', 255).notNullable();
            table.integer('ano', 255).notNullable();
            table.string('descricao', 255).notNullable();
            table.boolean('vendido').notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('automoveis')
};
