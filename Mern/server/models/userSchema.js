const mongoose = require("mongoose")
const validator = require("validator")
const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        require: true,
        minLength: 5,
        maxLength: 50,
    },
    lname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw Error("not valid email")
            }
        }
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 12
    },
    gender: {
        type: Boolean,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
    profile: {
        type: Boolean,
        required: true,
    },
    location: {
        type: Boolean,
        required: true,
    },
    dateCreated: Date,
    dateUpdated: Date,

})


const users = new mongoose.model("users", userSchema)

users.save();

module.exports = users