const Token = require("../../models/Token")

const LogOutUser = async (req, res) => {
    const userIdToDelete = req.body.user
    console.log("Deleting user ID:", userIdToDelete);
    try {
        const result = await Token.findOneAndDelete({ user: userIdToDelete })
        console.log('deleting user', result)
        res.clearCookie('accessToken', {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            signed: true,
        });
        res.clearCookie('refreshToken', {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            signed: true,
        });
        res.status(200).json({ msg: 'user logout sucessfully' })
    } catch (error) {
        console.log("cannot logout", error.message)
        res.status(500).json({ msg: 'Internal server error' });
    }
}

module.exports = LogOutUser