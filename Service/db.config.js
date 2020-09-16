const {DB_USERNAME,DB_PASSWORD,DB_HOST,DB_NAME} = process.env
const { Sequelize } = require('sequelize')


const db = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
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