require("dotenv").config();
const routes = require("./routes/Routes")
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors())
app.use(routes)

app.listen(process.env.PORT, () => {
    console.log('server created successfully')
});

