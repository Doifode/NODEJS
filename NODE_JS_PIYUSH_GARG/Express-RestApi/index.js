const express = require('express');
const routes = require('./SERVER/Routes');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(routes);

app.listen(2304, () => console.log('connected with server !'))