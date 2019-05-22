module.exports = (sequelize, Sequelize) => {
    class User extends Sequelize.Model { }
    User.init({
        // columns go here
    },
      {
        sequelize,
        modelName: 'user'
      }
    )
  
    return User
  }