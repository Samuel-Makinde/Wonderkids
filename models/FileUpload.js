const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        filename: String,
        filePath: String,
    },
    pdf: {
        filename: String,
        filePath: String,
    },
    uploadedAt: {
        type: Date,
        default: Date.now,
    },
});

const File = mongoose.model("File", fileSchema);

module.exports = File