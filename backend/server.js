import path from "path";
import express from 'express';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';

import authRoutes from "./routes/authroutes.js"
import messageRoutes from "./routes/messageroutes.js"
import userRoutes from "./routes/userroutes.js"

import { connect } from 'mongoose';
import connectToMongoDB from './db/connectToMongoDB.js';
import { app,server } from './socket/socket.js';
dotenv.config(); 

const Port = process.env.Port || 5000;

const __dirname = path.resolve();



app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname,"/frontend/dist")));
console.log("Static files served from:", path.join(__dirname, "/frontend/dist"));

// app.get("/", (req, res) =>{
//     res.send("<H1>Hello World</H1>");
// })

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);



app.get("*", (req, res) =>{
    res.sendFile(path.join(__dirname, "frontend", "dist","index.html"));
})


server.listen(Port,() => {
    connectToMongoDB();
    console.log(`server is up and runnig at port ${Port}`);
});
  