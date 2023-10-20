const User = require("../../models/Users")
const sendForgotPasswordEmail = require("../../utils/sendForgottenPasswordEmail")
const crypto = require("crypto")


const ForgotPassword = async (req, res) => {
    const { email } = req.body
    const details = [
        "email"
    ];

    for (const detail of details) {
        if (!req.body[detail]) {
            return res.status(400).json({ msg: `${detail} is required` });
        }
    }

    try {
        const user = await User.findOne({ email: email })
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        if (user) {
            const details = {
                id: user._id,
                email: user.email,
                firstName: user.firstName
            }
            const generatePasswordToken = crypto.randomBytes(70).toString('hex');
            const origin = process.env.ORIGIN;
            await sendForgotPasswordEmail({
                username: user.username,
                email: user.email,
                token: generatePasswordToken,
                origin
            })

            const tenMinutes = 1000 * 60 * 10;
            const passwordTokenExpirationDate = new Date(Date.now() + tenMinutes);

            user.passwordToken = crypto.createHash('sha256').update(generatePasswordToken).digest('hex');
            user.passwordTokenExpirationDate = passwordTokenExpirationDate
            await user.save()
            res.status(200).json({ msg: "Please check your email for reset password link", data: details })
        }
    } catch (error) {
        res.status(500).json({ "message": error.message })
        res.status(500).json({ msg: 'Internal server error' });
    }
}

module.exports = ForgotPassword