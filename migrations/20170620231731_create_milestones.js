
exports.up = function(knex, Promise) {
  //  milstones table
  // The milestones table should have the following fields:
  // description (string)
  // date_achieved (date)

  knex.schema.createTable('milestones', function(table) {
    return Promise.all([
    table.increments();
    table.string('description');
    table.date("date_achieved");
    table.timestamps()
    ])
  })
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('milestones');
    ])
};
