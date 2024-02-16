const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const route = require('./routes');
app.use(bodyParser.json());
app.use(route)

//json parser middleware 


app.listen(2304, () => {
    console.log('connected ')
});