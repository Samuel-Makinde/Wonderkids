const express = require("express")
const router = express.Router()

const authenticatedUser = require("../middleware/authentication")
const files = require("../controllers/Books")
const preventHotLinking = require("../middleware/preventHotlinking")
const allowedDomains = ["https://wonderkid.live", "https://www.wonderkid.live", "http://localhost:5173"];


router.get('/files', authenticatedUser, preventHotLinking(allowedDomains), files);


module.exports = router
