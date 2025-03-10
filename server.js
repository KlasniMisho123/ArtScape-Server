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