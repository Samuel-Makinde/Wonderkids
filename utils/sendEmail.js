const nodemailer = require('nodemailer');
const nodeMailerConfig = require("../config/nodemailer")

const sendEmail = async ({ html, to, subject }) => {
    const transporter = nodemailer.createTransport(nodeMailerConfig)

    try {
        const info = await transporter.sendMail({
            from: `"Wonderkidz" `,
            html,
            to,
            subject
        });

        console.log("Email sent:", info.response);
        return info;
    } catch (error) {
        console.error("Email sending failed:", error);
        throw error;
    }
}

module.exports = sendEmail