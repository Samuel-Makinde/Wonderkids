const express = require("express")
const router = express.Router()
const createNewUser = require("../controllers/UsersAuthentication/registerUser")
const verifyEmail = require("../controllers/UsersAuthentication/verifyEmail")
const resendEmail = require("../controllers/UsersAuthentication/resendEmail")
const ForgotPassword = require("../controllers/UsersAuthentication/forgotPassword")
const LoginUser = require("../controllers/UsersAuthentication/loginUser")
const LogOutUser = require("../controllers/UsersAuthentication/logoutUser")
const ResetPassword = require("../controllers/UsersAuthentication/resetPassword")

router.post('/register', createNewUser);
router.post('/verify-email', verifyEmail)
router.post('/resend-email', resendEmail)
router.post('/login', LoginUser)
router.post('/forgot-password', ForgotPassword)
router.post('/reset-password', ResetPassword)
router.post('/logOut', LogOutUser)



module.exports = router