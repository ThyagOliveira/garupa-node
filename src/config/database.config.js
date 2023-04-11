const { Sequelize } = require('sequelize');

const db = new Sequelize(
  process.env.POSTGRES_DB || 'garupa-db',
  process.env.POSTGRES_USER || 'postgres',
  process.env.POSTGRES_PASSWORD || 'postgres',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
  },
);

module.exports = db;
