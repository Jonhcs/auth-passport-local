const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const methodOverride = require('method-override')
const passport = require('passport')
const MongoClient = require('mongoose')
const app = express()

//Utilizado para uma auth Basic
//passport.use(require('./src/auth/basic'))
//app.get('*', passport.authenticate('basic', {session: false}))


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride('_method'))
app.use(passport.initialize())
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'src/view'))

require('./src/index')(app)

MongoClient.connect("mongodb://localhost:27017/auth", {useNewUrlParser: true, useUnifiedTopology: true})
MongoClient.Promise = global.Promise
app.listen(3000, () => {
    console.log('Start express')
})