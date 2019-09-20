const User = require('./../../model/user')

module.exports = (req, res) => {
    User
        .create(req.body)
        .then((user) => {
            return res.redirect('/')
        })
        .catch((erro) => {
            console.log(error)
            return
        })
}