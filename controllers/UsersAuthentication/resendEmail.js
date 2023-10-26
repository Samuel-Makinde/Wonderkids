const User = require("../../models/Users")
const sendVerificationEmail = require("../../utils/sendEmailVerification")
const crypto = require("crypto")
const bcrypt = require("bcrypt")



const resendEmail = async (req, res) => {
    // to get user details from the request body
    const {
        firstName,
        email,

    } = req.body;

    const details = [
        "firstName",
        "email",
    ];

    for (const detail of details) {
        if (!req.body[detail]) {
            return res.status(400).json({ msg: `${detail} is required` });
        }
    }

    try {
        // check for user by there email address and firstName
        const user = await User.findOne({ email: email, firstName: firstName }).exec()
        if (!user) {
            return res.status(404).json({ msg: "No account is associated with this email address and first Name" })
        }
        if (user.isVerify) {
            return res.status(400).json({ msg: "Email address have been verified" })
        }
        const NewverificationToken = crypto.randomBytes(40).toString('hex')


        user.verificationToken = NewverificationToken
        await user.save()
        // to send email verification
        const origin = "https://wonderkid.live";
        await sendVerificationEmail({
            username: user.username,
            email: user.email,
            verificationToken: NewverificationToken,
            origin
        })
        console.log(user)
        res.status(200).json({ msg: "New verification email sent", data: user })
    } catch (error) {
        console.log("not saving")
        res.status(500).json({ "message": error.message })
    }
}

module.exports = resendEmail