
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const sequelize = require("./config/database");



(async ()=> {
    try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync();
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

app.use("/api",require("./src/routes/userRoutes"));

app.listen(port, () => console.log(`listening on http://localhost:${port}`));


