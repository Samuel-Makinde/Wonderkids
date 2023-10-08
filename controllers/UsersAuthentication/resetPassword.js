const User = require("../../models/Users")
const crypto = require("crypto")
const bcrypt = require("bcrypt")



const ResetPassword = async (req, res) => {
    const { token, email, password } = req.body
    const details = [
        "token",
        "password",
        "email",
    ];

    for (const detail of details) {
        if (!req.body[detail]) {
            return res.status(400).json({ msg: `${detail} is required` });
        }
    }

    try {
        const user = await User.findOne({ email })
        // to check if user exist
        if (user) {
            const currentDate = new Date()
            const hashedToken = crypto.createHash('sha256').update(token).digest('hex')
            // convert mongodb time to object before comparing
            const mongodbDate = new Date(user.passwordTokenExpirationDate);
            if (user.passwordToken === hashedToken && mongodbDate > currentDate
            ) {
                const hashedpassword = await bcrypt.hash(password, 10)
                user.password = hashedpassword
                user.passwordToken = null
                user.passwordTokenExpirationDate = null
                await user.save()
                return res.status(200).json({ msg: "password updated successfully" })
            } else {
                console.log("passwordtoken has expired")
                return res.status(401).json({ msg: "password token have expired" })
            }
        } else {
            res.status(404).json({ msg: "User not found" });
        }

    } catch (error) {
        console.log("cannot update password", error.message)
        res.status(500).json({ "message": error.message })
    }
}

module.exports = ResetPassword