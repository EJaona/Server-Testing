const config = require("./knexfile");
const knex = require("knex");

exports.knex(config.development);
