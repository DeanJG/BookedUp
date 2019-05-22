const Sequelize = require('sequelize')
const sequelize = require('../config')

let Book = require('./Book.js')(sequelize, Sequelize)
let BookClub = require('./BookClub.js')(sequelize, Sequelize)
let User = require('./User.js')(sequelize, Sequelize)

User.hasMany(BookClub)
User.hasMany(Book)
BookClub.belongsTo(User)
BookClub.hasMany(User)
BookClub.hasOne(Book)

module.exports = {
    Book, 
    BookClub, 
    User
}