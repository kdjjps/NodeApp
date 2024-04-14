const express = require("express")
const app = express()
const dotenv = require("dotenv");

dotenv.config({
    path: './.env'
})


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/./index.html')
})

app.listen(process.env.PORT, () => {
    console.log('App is Running on port ' + process.env.PORT)
})




