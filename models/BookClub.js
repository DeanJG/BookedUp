module.exports = (sequelize, Sequelize) => {
    class BookClub extends Sequelize.Model { }
    BookClub.init({
      name: {
        type: Sequelize.STRING,
        notNull: true,
        isAlpha: true,
        len: [5, 30]
      },
      book: {
        type: Sequelize.STRING(300),
        notNull: true,
        isNumeric: true,
      }  
    },
      {
        sequelize,
        modelName: 'bookClub'
      }
    )

    return BookClub
  }