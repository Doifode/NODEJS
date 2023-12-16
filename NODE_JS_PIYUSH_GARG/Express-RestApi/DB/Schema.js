const mongoose = require('mongoose')
exports.userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    job_title: {
        type: String,
        require: true
    },
    image: {
        type: String,

    },
    gender: {
        type: String
    }

});