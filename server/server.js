const express = require( "express")
const {connection}= require( "./config/db.js")
const PhotoRoute= require ("./routes/Photo.route.js")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())
app.use("/photos",PhotoRoute)


app.get("/",(req,res)=>{
    res.send("hiii")
})
















//Connection 
app.listen(process.env.PORT || 8080,async(req,res)=>{
    try {
        await connection
        console.log("Connection to database successfull")
    } catch (error) {
        console.log("Connection failed")
        console.log(error)
    }
    console.log(`listening on port ${process.env.PORT}`)
})