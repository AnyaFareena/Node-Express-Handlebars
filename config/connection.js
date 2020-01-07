var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
	// DB is JawsDB on Heroku
	connection = mysql.createConnection({
		port: 3306,
		user: 'vyv8n0551wenchm8',
		password: 'mevb1nfaji1vkq30',
		database: 'u1y09okhh3ul7rna',
		host: 'xefi550t7t6tjn36.cbetxkdyhwsb.us-east-1.rds.amazonaws.com'})
		
} else {
	// DB is local on localhost
	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'root@1234',
		database: 'burgers_db'
	})
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
module.exports = connection;
