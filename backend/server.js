import express from 'express';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';

import authRoutes from "./routes/authroutes.js"
import messageRoutes from "./routes/messageroutes.js"
import userRoutes from "./routes/userroutes.js"

import { connect } from 'mongoose';
import connectToMongoDB from './db/connectToMongoDB.js';
dotenv.config(); 

const app = express();
const Port = process.env.Port || 5000;



app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) =>{
    res.send("<H1>Hello World</H1>");
})

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


app.listen(Port,() => {
    connectToMongoDB();
    console.log(`server is up and runnig at port ${Port}`);
});
  