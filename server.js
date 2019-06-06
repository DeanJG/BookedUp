const express = require('express')
const { join } = require('path')
const app = express() 

// const cors = require('cors')
// app.use(cors)
app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/hotdog', (req, res) => res.sendStatus(200))

require('./routes')(app)

require('./config').sync()
    .then(_ => app.listen(process.env.PORT || 3001))
    .catch(e => console.error(e))