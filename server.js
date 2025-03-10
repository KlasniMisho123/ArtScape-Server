import axios from "axios";
import express from "express";
import cors from "cors";
// Server side

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