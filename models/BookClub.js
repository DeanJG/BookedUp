module.exports = (sequelize, Sequelize) => {
    class BookClub extends Sequelize.Model { }
    BookClub.init({
      name: {
        type: Sequelize.STRING,
        notNull: true,
        isAlpha: true,
        len: [5, 30]
      },
      bookId: {
        type: Sequelize.STRING,
        notNull: true
      },
      userIds: {
        type: Sequelize.STRING,
        notNull: true,
        len: [1, 29]
      }  
    },
      {
        sequelize,
        modelName: 'bookClub'
      }
    )

    return BookClub
  }