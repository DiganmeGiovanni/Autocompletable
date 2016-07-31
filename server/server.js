
var bodyParser = require('body-parser')
var express    = require('express')

var searchController = require('./SearchController')

//
// Middleware initialization
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")

  next()
})

//
// Server routes configuration
app.get('/', function (req, res) {
  res.send('Hello world')
})

app.get('/search/country', searchController.searchCountries)

//
// Server initialization
var server = app.listen(3000, function () {
  
  var host = server.address().address
  var port = server.address().port

  console.log('Autocomplete server listening at: http://', host, port);
})