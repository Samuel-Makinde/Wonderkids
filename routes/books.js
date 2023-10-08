const express = require("express")
const router = express.Router()

const authenticatedUser = require("../middleware/authentication")
const files = require("../controllers/Books")
const getABook = require("../controllers/GetAbook")
const preventHotLinking = require("../middleware/preventHotlinking")


router.get('/files', authenticatedUser, files);
router.get('/files/:fileId', preventHotLinking("https://easereads.com"), getABook);


module.exports = router
