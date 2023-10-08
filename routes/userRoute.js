const express = require("express")
const router = express.Router()

const authenticatedUser = require("../middleware/authentication")
const showCurrentUser = require("../controllers/UsersController/userController")

router.post('/showMe', authenticatedUser, showCurrentUser);

module.exports = router
