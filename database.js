//TODO: in production environment dbSettings should be moved to a private .env setup file for security.
var sql = require('mysql');

var pool = sql.createPool({
	"connectionLimit"	: 10,
	"host"			: process.env.DB_HOST,
     "database"		: process.env.DB_DB,
     "user"			: process.env.DB_USER,
     "password"		: process.env.DB_PASS
});

module.exports = pool;
