const express = require('express');
const router = express.Router();
const path = require('path');
const pathDir = path.join(__dirname, "public");

router.get("/", (req, res) => {
    res.sendFile(`${pathDir}/index.html`)
})
module.exports = router;