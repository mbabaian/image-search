const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const request = require("request")
// request docs https://www.npmjs.com/package/request

const MONGOLAB_URI = "mongodb://admin:admin@ds233228.mlab.com:33228/search-term"
// connect to database
mongoose.connect(MONGOLAB_URI)

app.use(bodyParser.json())
app.use(cors())

app.use(express.static(__dirname + '/public'))

var api_url = 'https://api.dp.la/v2/items?q=kittens&api_key=aefc7b2874411888e4e06b515935c19c'
request(api_url, function(error, res, body) {
    
    console.log("results: ", body.docs)
    
})

const port = process.env.PORT || 8080
app.listen(port, function() {
    console.log("Server connected to port " + port)
})