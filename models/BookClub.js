module.exports = (sequelize, Sequelize) => {
    class BookClub extends Sequelize.Model { }
    BookClub.init({
        // columns go here
    },
      {
        sequelize,
        modelName: 'bookClub'
      }
    )
  
    return BookClub
  }