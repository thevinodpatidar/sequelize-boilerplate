const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sequelize-test', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
  });

  
module.exports = sequelize;