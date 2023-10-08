const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const TokenSchema = new Schema({
    refreshToken: { type: String, required: true },
    ip: { type: String, required: true },
    userAgent: { type: String, required: true },
    isValid: { type: Boolean, default: true },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'Users',
        required: true,
    },
},
    { timestamps: true }
)

module.exports = mongoose.model('Token', TokenSchema);