const mysql = require("mysql");

const db = mysql.createPool({
  host: "ai-project-database.cixz2neezc20.ap-northeast-2.rds.amazonaws.com",
  port: 3306,
  user: "admin",
  password: "emotioncatcher",
  database: "video",
});

module.exports = db;
