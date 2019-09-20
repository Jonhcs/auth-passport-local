const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const session =require('express-session')
const morgan = require('morgan')
const methodOverride = require('method-override')
const passport = require('passport')
const MongoClient = require('mongoose')
const app = express()


//Utilizado para uma auth Basic
//passport.use(require('./src/auth/basic'))
//app.get('*', passport.authenticate('basic', {session: false}))

require('./src/auth/local')(passport)

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride('_method'))
app.use(session({ secret: '!QWOUJWIUJOD', resave: false, saveUninitialized: true}))
app.use(passport.initialize())
app.use(passport.session())
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'src/view'))

require('./src/index')(app, passport)

MongoClient.connect("mongodb://localhost:27017/auth", {useNewUrlParser: true, useUnifiedTopology: true})
MongoClient.Promise = global.Promise
app.listen(9000, () => {
    console.log('Start express')
})