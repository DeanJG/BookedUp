const db = require('../models')

module.exports = app => {
    // user routes go here...
    // GET all users
    app.get('/users', (req, res) => {
        db.User.findAll()
            .then(users => res.json(users))
            .catch(e => console.log(e))
    })
    // GET a user
    app.get('/users/:id', (req, res) => {
        db.User.findOne({ where: {id: req.params.id } })
            .then(user => res.json(user))
            .catch(e => console.log(e))
    })
    // GET a user's friends
    app.get('/users/:id/friends', (req, res) => {
        db.User.findOne({ where: {id: req.params.id } })
            .then(user => {
                const friendArr = user.friendIds.split(',')
                return db.User.findAll({ where: {id: friendArr } })
            })
            .then(friendList => res.json({friendList, count: friendList.length}))
            .catch(e => console.log(e))
    })

    // POST a user
    app.post('/users', (req, res) => {
        db.User.create(req.body)
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    // PUT a user
    app.put('/users/:id', (req, res) => {
        db.User.update(req.body, { where: { id: req.params.id } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    // DELETE a user 
    app.delete('/users/:id', (req, res) => {
        db.User.destroy({ where: { id: req.params.id } })
            .then(_ => res.sendStatus(200))
            .catch(e => console.log(e))
    })
}