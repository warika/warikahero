'use strict';

var _pg = require('pg');

require('dotenv').load();


var pool = new _pg.Pool({
  host: process.env.DB_URL,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
});

module.exports = pool;
//# sourceMappingURL=connection.js.map