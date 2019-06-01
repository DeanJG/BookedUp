const db = require('../models')

module.exports = app => {
    // user routes go here...
    // GET all users
    app.get('/users', (req, res) => {
        db.Book.findAll()
            .then(users => res.json(users))
            .catch(e => console.log(e))
    })
    // GET a user
    app.get('/users/:id', (req, res) => {
        db.Book.findOne({ where: {id: req.params.id } })
            .then(user => res.json(user))
            .catch(e => console.log(e))
    })

    // POST a user
    app.post('/users', (req, res) => {
        db.Book.create(req.body)
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    // PUT a user
    app.put('/users/:id', (req, res) => {
        db.Book.update(req.body, { where: { id: req.params.id } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    // DELETE a user 
    app.delete('/users/:id', (req, res) => {
        db.Book.destroy({ where: { id: req.params.id } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
}