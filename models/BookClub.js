module.exports = (sequelize, Sequelize) => {
    class BookClub extends Sequelize.Model { }
    BookClub.init({
      name: Sequelize.STRING,
      books: Sequelize.STRING    
    },
      {
        sequelize,
        modelName: 'bookClub'
      }
    )
  
    return BookClub
  }