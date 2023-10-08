const jwt = require("jsonwebtoken")


const generateAccessToken = (id, username, email, role) => {
    let token = jwt.sign({ id, username, email, role }, process.env.ACCESS_TOKEN, { expiresIn: '1d' })
    return token
}

const generateRefreshToken = (id, username, email, role) => {
    let token = jwt.sign({ id, username, email, role }, process.env.REFRESH_TOKEN, { expiresIn: '30d' })
    return token
}

const isAccessTokenValid = (token) => jwt.verify(token, process.env.ACCESS_TOKEN);
const isRefreshTokenValid = (token) => jwt.verify(token, process.env.REFRESH_TOKEN);


module.exports = {
    generateAccessToken,
    generateRefreshToken,
    isAccessTokenValid,
    isRefreshTokenValid
}
