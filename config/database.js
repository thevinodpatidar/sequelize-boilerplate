module.exports = {
  development: {
      "username": "postgres",
      "password": "postgres",
      "database": "sequelize-test",
      "host": "127.0.0.1",
      "dialect": "postgres"
    },
    test: {
      "username": "postgres",
      "password": "postgres",
      "database": "sequelize-test",
      "host": "127.0.0.1",
      "dialect": "postgres"
    },
    production: {
      dialect: 'postgres',
      use_env_variable: process.env.DATABASE_URL
    }
}