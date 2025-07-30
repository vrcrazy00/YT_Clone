import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import express from "express"



const connectDB= async ()=>{
    try {
     const connectionInstance=   await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)

     console.log(`Connection Sucess ${connectionInstance.connection.host}`);
     
    } catch (err) {
        console.log("Error: ",err);
        process.exit(1);
    }
}


export default connectDB;