const User = require("../../models/Users")
const Token = require("../../models/Token")
const bcrypt = require("bcrypt")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")
const { generateAccessToken,
    generateRefreshToken } = require("../../utils/generateToken")



const LoginUser = async (req, res) => {
    const { email, password } = req.body
    const details = [
        "password",
        "email",
    ];

    for (const detail of details) {
        if (!req.body[detail]) {
            return res.status(400).json({ msg: `${detail} is required` });
        }
    }
    try {
        const user = await User.findOne({ email: email })
        if (!user) {
            return res.status(404).json({ msg: "Invalid email Credential" })
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(404).json({ msg: "Invalid password Credential" })
        }
        if (!user.isVerify) {
            return res.status(401).json({ msg: "Please Check your mail to verify your account" })
        }

        // create refreshtoken
        let refreshToken = ''
        const oneDay = 1000 * 60 * 24;
        const longerExp = 1000 * 60 * 60 * 24 * 30;




        const existingToken = await Token.findOne({ user: user._id })
        let newAccessToken = ''
        if (existingToken) {
            const { isValid } = existingToken
            if (!isValid) {
                return res.status(401).json({ msg: "Please login again to continue your process" })
            }
            refreshToken = existingToken.refreshToken
            newAccessToken = generateAccessToken(user._id, user.username, user.email, user.role)
            // add sameSite: true and and secure: true in production 
            res.cookie('accessToken', newAccessToken, {
                httpOnly: true,
                secure: true,
                sameSite: "none",
                signed: true,
                expires: new Date(Date.now() + oneDay),
            }
            )
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: "none",
                signed: true,
                expires: new Date(Date.now() + longerExp),
            }
            )

        } else {

            // generate new refresh token
            refreshToken = generateRefreshToken(user._id, user.username, user.email, user.role)
            const userAgent = req.headers['user-agent'];
            const ip = req.ip;
            const userToken = { refreshToken, ip, userAgent, user: user._id };

            await Token.create(userToken);

            newAccessToken = generateAccessToken(user._id, user.username, user.email, user.role)

            res.cookie('accessToken', newAccessToken, {
                httpOnly: true,
                secure: true,
                sameSite: "none",
                signed: true,
                expires: new Date(Date.now() + oneDay),
            }
            )
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: "none",
                signed: true,
                expires: new Date(Date.now() + longerExp),
            }
            )
        }
        res.status(200).json({ msg: "User login successfully", accessToken: newAccessToken, username: user.username, userId: user._id })
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ msg: "internal server error" })
    }
}

module.exports = LoginUser