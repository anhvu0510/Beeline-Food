const { Sequelize } = require('sequelize')
const USERNAME = process.env.DB_USERNAME_LOCAL || process.env.DB_USERNAME_HOST
const PASSWORD = process.env.DB_PASSWORD_LOCAL || process.env.DB_PASSWORD_HOST
const DB_NAME = process.env.DB_NAME_LOCAL || process.env.DB_NAME_HOST
const HOST = process.env.DB_HOST_LOCAL || process.env.DB_HOST_HOST

const db = new Sequelize(DB_NAME, USERNAME, PASSWORD, {
    host: HOST,
    dialect:  'postgres'
});
module.exports = db



// const Sequelize = require("sequelize");

// //const myStringConect = "postgres://postgres:root@localhost:5432/BankingSystem";
// const myStringConect =
//     "postgres://postgres:postgres@localhost:5432/BankingSystem";

// const connectionString = process.env.DATABASE_URL || myStringConect;
// // "postgres://postgres:root@localhost:5432/BankingSystem";
// const db = new Sequelize(connectionString);

// module.exports = db;