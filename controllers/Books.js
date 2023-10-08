
const connectDB = require("../config/dbConnect");
const File = require("../models/FileUpload")

const files = async (req, res) => {
    try {
        await connectDB();
        const documents = await File.find({});
        res.status(200).json({ documents });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
}

module.exports = files;

