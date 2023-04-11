const sequelize = require('sequelize');
const db = require('../config/database.config');
const bcrypt = require('bcryptjs');

const users = db.define(
  'users',
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: sequelize.STRING,
      allowNull: true,
    },
    email: {
      type: sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: true,
        notEmpty: true,
        isEmail: true,
      },
    },
    password: {
      type: sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  },
);

users.beforeSave(async function (user) {
  if (user.isNewRecord || user.changed('password')) {
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
  }

  return user;
});

module.exports = users;
