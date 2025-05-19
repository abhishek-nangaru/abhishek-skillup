var express = require('express')
var bodyParser = require('body-parser')
var mysql = require('mysql')
var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function(request, response) {
  response.send("hello from express js...., This is my jenkins project integrating with docker in skillup")
})

app.get("/date", function(request, response) {
  response.send("Date is:.." + new Date().toLocaleString())
})

app.listen(9696, function(err) {
  if (err) throw err
  console.log("Server started on port 9696, to shut down hit ctrl+c")
})
