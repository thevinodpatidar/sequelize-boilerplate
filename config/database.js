const { Sequelize } = require('sequelize');
const dbConfig = require("./database.json");

var sequelize;

if(process.env.NODE_ENV === "production"){
sequelize = new Sequelize(process.env.DATABASE_URL);
}else{
sequelize = new Sequelize('sequelize-test', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});
}

  
module.exports = sequelize;