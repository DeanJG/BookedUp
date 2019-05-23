const db = require('../models')

module.exports = app => {
    // bookRoutes routes go here...
    // GET all bookclubs
    app.get('/bookclubs', (req, res) => {
        Book.findAll()
            .then(bookclubs => res.json(bookclubs))
            .catch(e => console.log(e))
    })
    // GET a bookclubs 
    app.get('/bookclubs/:id', (req, res) => {
        Book.findOne({ where: {id: req.params.id } })
            .then(bookclub => res.json(bookclub))
            .catch(e => console.log(e))
    })

    // POST a bookclubs 
    app.post('/bookclubs', (req, res) => {
        Book.create(req.body)
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    // PUT a bookclubs 
    app.put('/bookclubs/:id', (req, res) => {
        Book.update(req.body, { where: { id: req.params.id } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    // DELETE a bookclubs 
    app.delete('/bookclubs/:id', (req, res) => {
        Book.destroy({ where: { id: req.params.id } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
}