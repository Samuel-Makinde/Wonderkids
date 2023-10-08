const User = require("../../models/Users")


const verifyEmail = async (req, res) => {
    const { email, verificationToken } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        if (user.isVerify) {
            return res.status(200).json({ msg: 'Email has been verified' });
        }
        if (user.verificationToken !== verificationToken) {
            return res.status(400).json({ msg: 'Invalid verificationToken' });
        }
        user.isVerify = true;
        user.verificationToken = '';
        await user.save();
        return res.status(200).json({ msg: 'Email verified successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error' });
    }

}

module.exports = verifyEmail