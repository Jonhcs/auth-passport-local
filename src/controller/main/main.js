module.exports = (req, res) => {
    //return res.json({ msg: 'Hello from Nodejs and Passport'})
    return res.render('main/index', {
        user: req.user || null
    })
}