var http = require('http');
var fs = require('fs');

const PORT=8080; 

http.createServer(function (req, res) {
    fs.readFile(req.pathname, function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
  }).listen(8080); 
