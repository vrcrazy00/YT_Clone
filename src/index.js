// require('dotenv').config({path:'./env'});

import dotenv from "dotenv"
dotenv.config({path:'./env'})
import connectDB from "./db/index.js"





connectDB();








// import express from "express"
// const app=express();
// (async()=>{
//     try {
//  await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on("ERROR",(err)=>{
//             console.log("Connection error: ",err);
            
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log("App is listening....");
            
//         })
//     }
//     catch (error) {
//         console.error("ERROR :",error)
//     }
// })()