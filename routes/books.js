const express = require("express")
const router = express.Router()

const authenticatedUser = require("../middleware/authentication")
const files = require("../controllers/Books")
const preventHotLinking = require("../middleware/preventHotlinking")


router.get('/files', authenticatedUser, preventHotLinking("http://localhost:5173"), files);


module.exports = router
