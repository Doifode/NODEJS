const mongoose = require('mongoose');
const userSchema = require("./Schema")

// Connection with mongoDB;
mongoose.connect("mongodb://127.0.0.1:27017/NewEmployees").
    then((e) => console.log("connection with db done")).
    catch((e) => {
        console.log(e)
    });


const users = mongoose.model('users', userSchema.userSchema);
module.exports = users