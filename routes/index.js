module.exports = app => {
    require('./bookRoutes.js')(app)
    require('./bookClubRoutes.js')(app)
    require('./userRoutes.js')(app)
}