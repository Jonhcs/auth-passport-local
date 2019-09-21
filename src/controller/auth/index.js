const express = require('express')
const router = express.Router()

module.exports= (passport) => {
    router.get('/', require('./login'))
    router.post('/login', passport.authenticate('local-signin', {
        successRedirect: '/',
        failureRedirect: '/users'
    }))
    
    return router
}