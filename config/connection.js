

require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: process.env.DBPASSWORD,
    database: "burgers_db",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: "qsnrtibb37u253zb",
    password: process.env.JAWSDBPASSWORD,
    database: "pj4qq2yjmuzx0dqp",
    host: "	lyn7gfxo996yjjco.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql"
  },
  production: {

    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};