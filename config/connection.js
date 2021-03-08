require("dotenv").config();
const mysql = require(`mysql`);

if(process.env.JAWSDB_URL){
  const connection = mysql.createConnection(process.env.JAWSDB_URL)
}else{
  const connection = mysql.createConnection({
    host: `localhost`,
    port: 3306,
    user: `root`,
    password: `DBPASSWORD`,
    database: `burgers_db`,
  });
}

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;


