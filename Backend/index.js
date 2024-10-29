const express = require('express')
const cors = require('cors')
// const mongoose = require('mongoose')
// const bodyParser = require('body-parser')


const app = express();
app.use(express.json()) //Its a middleware that parses the JSON payload and makes it available on req.body.
app.use(cors()) // Its also a middleware , It allows your server to accept requests from different origins (domains). cors() adds the necessary HTTP headers to the response to allow cross-origin requests.

const mainRouter = require("./routes/index")

app.use('/',mainRouter)
app.listen(3000,()=>{
    console.log("You are running on port 3000");
    
})