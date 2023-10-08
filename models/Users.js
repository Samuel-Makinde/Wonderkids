const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    username: {
        type: String,
        required: [true, "cannot be blank"],
        trim: true,
    },
    firstName: {
        type: String,
        required: [true, "cannot be blank"],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, "cannot be blank"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "cannot be blank"],
        trim: true,
    },
    password: {
        type: String,
        required: [true, "cannot be blank"],
        trim: true,
    },
    role: {
        type: String,
        enum: ['admin', 'subscriber', 'user'],
        default: 'user'
    },
    isVerify: {
        type: Boolean,
        default: false
    },
    passwordToken: {
        type: String,
    },
    passwordTokenExpirationDate: {
        type: String,
    },
    verificationToken: String,
    refreshTokenExpiration: {
        type: Date,
    },
}, {
    timestamps: true
},
)


const Users = mongoose.model("Users", usersSchema)
module.exports = Users