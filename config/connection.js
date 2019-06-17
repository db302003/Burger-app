const mysql = require("mysql");
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Jas30@Fran",
    database: "burgers_db"
  });
}
connection.connect();

module.exports = connection;