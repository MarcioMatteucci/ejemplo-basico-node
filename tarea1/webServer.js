var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  fs.appendFile('url.txt', req.url);
  res.end();
}).listen(8080);

console.log('Server Up');