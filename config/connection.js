const Sequelize = require('sequelize');

require('dotenv').config();
console.log(process.env) // remove this after you've confirmed it working

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize