var http = require('http');

http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{"contactSubject": ["General Enquery","Schedules","Instructors","Prices","Other","Nong"]}');
}).listen(5000);