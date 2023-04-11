const { Sequelize } = require('sequelize');
require('dotenv').config();

const db = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
);

module.exports = db;
