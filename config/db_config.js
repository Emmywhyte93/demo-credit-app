const knex = require("knex")
const knexConfig = require("../knexfile")
require("dotenv").config();

const environment = process.env.DB_ENV || "development"
//const environment = process.env.DEV_ENV || process.env.NODE_ENV;

module.exports = knex(knexConfig[environment])