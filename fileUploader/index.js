const express = require("express")
require("dotenv").config();
const app = express()
const fileUploader = require("./routes/index")

app.use("/upload", fileUploader)

app.listen(process.env.SERVER_PORT, ()=>{
    console.log("server started listening")
})
