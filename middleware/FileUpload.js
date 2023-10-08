const multer = require('multer');

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Specify the directory where files will be saved
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Rename the file to avoid conflicts
    },
});

const upload = multer({ storage: storage })

module.exports = upload;