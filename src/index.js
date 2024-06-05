// require('dotenv').config({path: './env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB();







/*
import express from 'express'
const app = express()
//we are using semicolon; before writing a iifi (()=>{})() for the cleaning purpose
//it will create problems if the coder has not given a semicolon before this iifi function so we use ; to be safe  
;(async ()=> {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error", (error)=> {
            console.log("ERROR : ", error);
            throw error;
        })

        app.listen(process.env.PORT, ()=> {
            console.log(`App is listening at port ${process.env.PORT}`);
        })

    } catch (err) {
        console.error("ERROR : ", err);
        throw err;
    }
})()
*/