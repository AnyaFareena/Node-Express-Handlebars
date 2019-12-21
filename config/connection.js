var mysql = require("mysql");


//Creating database connection
var connection = mysql.createConnection({
    host: "localhost",
    port: process.env.PORT || 3306,
    user: "root",
    password: "root@1234",
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) throw err;
});


// Export connection for ORM use
module.exports = connection;