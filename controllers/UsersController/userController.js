const Token = require("../../models/Token")

const showCurrentUser = async (req, res) => {
    const { username } = req.user;
    res.status(201).json({ username })
};

module.exports = showCurrentUser


