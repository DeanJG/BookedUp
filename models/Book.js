module.exports = (sequelize, Sequelize) => {
    class Book extends Sequelize.Model { }
    Book.init({
      title: Sequelize.STRING,
      author: Sequelize.STRING,
      genre: Sequelize.STRING,
      year_published: Sequelize.INTEGER,
      rating: Sequelize.INTEGER,
      synopsis: Sequelize.STRING,
      cover: Sequelize.STRING
    },
      {
        sequelize,
        modelName: 'books'
      }
    )
  
    return Book
  }