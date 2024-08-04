const express = require("express")
const app = express()
const dotenv = require("dotenv");

dotenv.config({
    path: './.env'
})

const PORT = process.env.PORT || 8000


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/./index.html')
})

app.listen(PORT, () => {
    console.log('App is Running on port ' + process.env.PORT)
})




