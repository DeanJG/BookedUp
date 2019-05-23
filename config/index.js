const Sequelize = require('sequelize')
require("dotenv").config()

let sequelize

if (process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize(process.env.JAWSDB_URL) //we will replace this, just a placeholder for now
} else {
  sequelize = new Sequelize(`mysql://root:${process.env.MYSQL_PASS}@localhost:3306/bookedup_db`)
}

module.exports = sequelize