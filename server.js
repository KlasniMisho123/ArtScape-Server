import express from "express";
import axios from "axios";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from 'dotenv';

const app = express()
const port = 5000

const corsOptions = {
    origin:"http://localhost:3000",
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(bodyParser.json()); 
dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.USER,
        pass: process.env.APP_PASSWORD,
    },
});

async function sendMail(transporter, mailOptions) {
    try {
        await transporter.sendMail(mailOptions)
        console.log("Email has been sent succesfully!")
    } catch(err) {
        console.error('sendMail Error: ', err)
    }
}

app.get("/", async (req, res) => {
    console.log("Connected to Server");
    res.send("Server is running");
});

app.post("/sendemail", async (req,res) => {
    const {newEmail, verificationCode } = req.body
    console.log("Retrivied Data : ",newEmail ,verificationCode)
    try {
        const mailOptions = {
            from: {
                name: `ArtScape Verification`,
                address: "moodcheck12@gmail.com"
            },
            to: newEmail,
            subject: "Verification Code",
            text: `Your Verification Code: ${verificationCode}`,
        };

        await transporter.sendMail(mailOptions);
        console.log("Email has been sent successfully!");
        res.status(200).json({ message: "Email sent successfully" });
    } catch(err) {
        console.log("ERR: ", err);
        res.status(500).json({ error: "Failed to send email." });
    }
})

app.listen(port, () => {
    console.log(`App is Running on: http://localhost:${port}`);
});