module.exports = (sequelize, Sequelize) => {
    class Book extends Sequelize.Model { }
    Book.init({
      title: {
        type: Sequelize.STRING,
        notNull: true,
        isAlphanumeric: true,
      },
      author: {
        type: Sequelize.STRING,
        notNull: true,
        isAlpha: true,
      },
      genre: {
        type: Sequelize.STRING,
        isAlpha: true
      },
      year_published: Sequelize.INTEGER,
      rating: Sequelize.FLOAT(4,1),
      synopsis: Sequelize.STRING(1250),
      cover: {
        type: Sequelize.STRING,
        notNull: true
      }
    },
      {
        sequelize,
        modelName: 'book'
      }
    )
    return Book
  }