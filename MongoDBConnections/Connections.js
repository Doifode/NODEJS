const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/NodeJsUsers').then(() => {
    console.log('connection successful')
}).catch((e) => console.log(e));
/*
This code is used to create the database from here only
mongodb://127.0.0.1:27017/YOUR_DATABASE_NAME
*/

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        unique:true
     },
    confirmPassword: {
        type: String,
        required: true
    },
});
/*
Here you  can  define the value fields of that collection
collection is nothing but the json object
from here you can define the formate  of your body/schema. 
*/

const user = mongoose.model('users', schema);
/*
Here you can create the actual collection name and define the formate of that collection{
    name:string,
    password:string,
    phone:number
} like this
*/

module.exports = user;
