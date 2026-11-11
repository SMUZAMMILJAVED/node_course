
const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();
const app = express();
app.use(express.json());
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
app.get("/send-email", async (req, res) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: "reciver@gmail.com",
            subject: "My First Email",
            text: "Hello! This email is sent using Node.js and Nodemailer."
        });
        console.log("Email sent:", info.messageId);
        res.send("Email sent successfully!");
    } catch (error) {
        console.log(error);
        res.status(500).send("Email sending failed!");
    }
});
app.listen(5000, () => {
    console.log("Server running on port 5000");
});