const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'kst_test',
    host: "testdb.amondz.com",
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'kst_test',
    host: "testdb.amondz.com",
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'kst_test',
    host: "testdb.amondz.com",
    dialect: 'mysql',
  },
};
