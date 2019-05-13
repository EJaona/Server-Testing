exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("test")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("test").insert([{ name: "Enoka" }]);
    });
};
