const express = require('express');
const router = express.Router();
const middleware = require('../MiddleWare/agerestriction');

// router.use(middleware);

router.get('/',middleware, (req, res) => {
    res.render("index", {
        title: "Index"
    })
})
router.get('/about',middleware, (req, res) => {
    res.render("About", {
        title: "about"
    })
})

module.exports = router