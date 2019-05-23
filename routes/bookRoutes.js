const db = require('../models')

module.exports = app => {
    // bookRoutes routes go here...
    // GET all books
    app.get('/books', (req, res) => {
        Book.findAll()
            .then(books => res.json(books))
            .catch(e => console.log(e))
    })
    // GET a book 
    app.get('/books/:id', (req, res) => {
        Book.findOne({ where: {id: req.params.id } })
            .then(book => res.json(book))
            .catch(e => console.log(e))
    })

    // POST a book 
    app.post('/books', (req, res) => {
        Book.create(req.body)
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    // PUT a book 
    app.put('/books/:id', (req, res) => {
        Book.update(req.body, { where: { id: req.params.id } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    // DELETE a book 
    app.delete('/books/:id', (req, res) => {
        Book.destroy({ where: { id: req.params.id } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
}