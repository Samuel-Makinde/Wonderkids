const connectDB = require("../config/dbConnect");
const File = require("../models/FileUpload");


const fs = require("fs");

// Define a function to get a specific book by its fileId
const getABook = async (req, res) => {
    try {
        await connectDB();

        // Find the file based on the fileId parameter
        const fileId = req.params.fileId;
        const file = await File.findById(fileId);

        if (!file) {
            return res.status(404).json({ msg: 'File not found' });
        }

        // const filePath = file.pdf.filePath; // Change to file.image.filePath for images
        const filePath = file.pdf.filePath.replace(/\\/g, '/');

        // Read the file content
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return res.status(500).json({ msg: 'Error reading file' });
            }

            // Set the appropriate content type based on the file type
            if (file.pdf.filename) {
                res.contentType('application/pdf');
            } else if (file.image.filename) {
                res.contentType('image/jpeg'); // Update with the appropriate image MIME type
            } else {
                return res.status(400).json({ msg: 'Unsupported file type' });
            }

            res.send(data);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};

module.exports = getABook;
