const User = require("../../models/Users")
const bcrypt = require("bcrypt")
const crypto = require("crypto")
const sendVerificationEmail = require("../../utils/sendEmailVerification")

const createNewUser = async (req, res) => {
    // to get user details from the request body
    const {
        username,
        firstName,
        lastName,
        email,
        password
    } = req.body;

    const details = [
        "username",
        "firstName",
        "lastName",
        "email",
        "password"
    ];

    for (const detail of details) {
        if (!req.body[detail]) {
            return res.status(400).json({ msg: `${detail} is required` });
        }
    }

    // check for duplicate user by there email address
    const duplicateEmail = await User.findOne({ email: email })
    if (duplicateEmail) {
        return res.status(409).json({ msg: "Email address is associated with an account" })
    }

    try {
        const hashedpassword = await bcrypt.hash(password, 10)
        const verificationToken = crypto.randomBytes(40).toString('hex')
        const isFirstFourUsers = (await User.countDocuments({})) < 4;
        const role = isFirstFourUsers ? 'admin' : 'user'

        const user = await User.create({
            username,
            firstName,
            lastName,
            email,
            role,
            password: hashedpassword,
            verificationToken,

        })
        const origin = 'https://easereads.com';

        // to send email verification
        await sendVerificationEmail({
            username: user.username,
            email: user.email,
            verificationToken: user.verificationToken,
            origin
        })
        console.log(user)
        res.status(201).json({ msg: "Account Created, Email has been sent to your mailbox", data: user })
    } catch (error) {
        console.log("not working")
        res.status(500).json({ "message": error.message })
    }
}

module.exports = createNewUser