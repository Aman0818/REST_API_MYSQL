const mysql = require('mysql2')

const poolConnection = mysql.createPool({
    port:process.env.port,
    host: process.env.host,      
    user: process.env.user,  
    password: process.env.password,
    database: process.env.database,
    connectionLimit:process.env.connectionLimit
});

module.exports=poolConnection;
