const express = require("express")
const app = express()
const dotenv = require("dotenv");

dotenv.config({
    path: './.env'
})

const PORT = process.env.PORT || 8000


app.get('/', (req, res) => {
    res.send('Welcome to Node Js Application')
})

app.get('/about', (req, res) => {
    res.send('About Us')
})

app.listen(PORT, () => {
    console.log('App is Running on port '+ PORT)
})




