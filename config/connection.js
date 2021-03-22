const Sequelize = require('sequelize'); // Allowing us to use sequelize
require('dotenv').config(); // Allowing us to use dotenv

let sequelize; // Making sequelize a variable

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else { // Using what is in .env to connect to database and MySQL
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;