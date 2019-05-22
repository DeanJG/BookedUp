module.exports = (sequelize, Sequelize) => {
    class Book extends Sequelize.Model { }
    Book.init({
        // columns go here
    },
      {
        sequelize,
        modelName: 'book'
      }
    )
  
    return Book
  }