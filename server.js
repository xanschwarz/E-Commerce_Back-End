const express = require("express");
const routes = require("./routes");
// Import the sequelize connection.
const sequelize = require("./config/connection");

// Uses environment port, or 3001 if environment port not specified.
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing application/json and urlencoded data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Turn on routes.
app.use(routes);

// Sync sequelize models to the database, then turn on the server.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
