const { Pool } = require("pg");
const pool = new Pool({
  user: "user_db",
  password: "neverforget",
  host: "localhost",
  port: 5433,
  database: "assignments",
});
module.exports = pool;
