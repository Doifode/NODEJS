const express = require('express');
const app = express();
// express configuration 

const router = require('./routes')
app.use(router);
// import router 

app.set('view engine', 'ejs');
// setting view engine ejs 

app.use(express.json());
//json middleware to recognize json obj

app.use(express.urlencoded({ extended: false }))

app.listen(8080, () => {
    console.log(
        'connected successfully !'
    )
})
// server listening