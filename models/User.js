module.exports = (sequelize, Sequelize) => {
    class User extends Sequelize.Model { }
    User.init({
      name: {
        type: Sequelize.STRING,
        notNull: true,
        notEmpty: true,
        isAlpha: true,
        len: [5, 50]
      },
      email: {
        type: Sequelize.STRING,
        notNull: true,
        notEmpty: true,
        len: [6, 50],
        isEmail: true
      },
      friends: {
        type: Sequelize.STRING(300),
        notNull: true,
        isNumeric: true,
      },
      books: {
        type: Sequelize.STRING(300),
        notNull: true,
        isNumeric: true,
      }   
    },
      {
        sequelize,
        modelName: 'user'
      }
    )

    return User
  }