const express = require('express');
const Routes = express.Router();
// express router integration

const multer = require('multer')
// import multer 

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        return cb(null, './uploadedfile')
    },
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}-${file.originalname}`);
    }
})
//storage configuration in folder 

const upload = multer({ storage })


Routes.get("/", (req, res) => {
    res.render('home')
});
// home route file rendering 

Routes.post('/upload', upload.single("profileImage"), (req, res) => {
    console.log(req.body);
    console.log(req.file)
})

module.exports = Routes
// exporting router function