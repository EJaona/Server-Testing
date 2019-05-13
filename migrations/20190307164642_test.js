exports.up = function(knex, Promise) {
  return knex.schema.createTable("test", test => {
    test.increments();

    test
      .string("name", 123)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("test");
};
