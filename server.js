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
// app.use(bodyParser.json()); 
// dotenv.config();


app.get("/", async (req, res) => {
    console.log("Connected to Server");
    res.send("Server is running");
    
});

app.listen(port, () => {
    console.log(`App is Running on: http://localhost:${port}`);
});