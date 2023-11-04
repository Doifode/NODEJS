const agecheck = (req, res, next) => {
    if (req.query.age > 18) {
        next(

        )
    } else if (req.query.age < 18) {
        res.send('Not allow')
    }

}
module.exports = agecheck