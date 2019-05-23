module.exports = (sequelize, Sequelize) => {
    class User extends Sequelize.Model { }
    User.init({
      name: Sequelize.STRING,
      friends: Sequelize.STRING,
      books: Sequelize.INTEGER     
    },
      {
        sequelize,
        modelName: 'user'
      }
    )
  
    return User
  }