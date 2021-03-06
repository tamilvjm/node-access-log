var http = require('http');

var accesslog = require('../');

var host = '127.0.0.1';
var port = 9127;

var format = ':ip :method :statusCode :url (:{delta}ms)';

http.createServer(onrequest).listen(port, host, started);

function onrequest(req, res) {
  accesslog(req, res, format);
  res.end();
}

function started() {
  console.log('server started');

  var req = http.request('http://localhost:9127/PWN3D:userAgentPWN3D', function() {
    process.exit(0);
  });
  req.end();
}
