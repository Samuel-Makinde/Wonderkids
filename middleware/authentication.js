const Token = require("../models/Token");
const {
    isAccessTokenValid,
    isRefreshTokenValid,
    generateAccessToken,
} = require("../utils/generateToken");

const authenticatedUser = async (req, res, next) => {
    const { accessToken, refreshToken } = req.signedCookies;

    try {
        if (accessToken) {
            const payload = isAccessTokenValid(accessToken);
            req.user = payload;
            console.log("Access Token Payload:", payload);
            return next();
        }

        const payload = isRefreshTokenValid(refreshToken);
        const existingToken = await Token.findOne({
            user: payload.id
        });
        console.log("Refresh Token Payload:", payload);
        console.log("existing Payload:", existingToken);



        if (!existingToken || !existingToken.isValid) {
            return res.status(401).json({
                msg: "Please login again to continue your process",
            });
        }

        const oneDay = 1000 * 60 * 24;
        const newAccessToken = generateAccessToken(
            existingToken.user._id,
            existingToken.user.username,
            existingToken.user.email,
            existingToken.user.role
        );

        // Update the accessToken cookie
        res.cookie("accessToken", newAccessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            signed: true,
            expires: new Date(Date.now() + oneDay),
        });

        req.user = payload;
        next();
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ msg: "Internal server error" });
    }
};

module.exports = authenticatedUser;
