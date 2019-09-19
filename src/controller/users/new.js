const User = require('./../../model/user')

module.exports = (req, res) => {
    return res.render('user/new', {
        user: new User()
    })
}