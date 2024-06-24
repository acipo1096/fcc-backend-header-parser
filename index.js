// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

const os = require('os');
const http = require('http');

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/api/whoami',function (req, res){

  // Get IP address
  const fetchData = fetch("https://api.ipify.org?format=json")
  .then(response => {
    return response.json();
  })
  .then(data => {
    const ipaddress = data;
    return ipaddress;
  })
  .catch(error => {
    return error;
  })

  // Get language
  const language = req.headers['accept-language']

  // Get software
  const userAgent = req.headers['user-agent'];
    
    fetchData.then(data => {
      res.json({
        "ipaddress" : data.ip,
        "language" : language,
        "software" : userAgent
      });
    })

  });
  

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
