// var http = require('http');

// http.createServer(function(request, response){
// 	response.writeHead(200,{'Content-type':'text/plain'}); // header, 200 is a normal request, can take a set of options:content-type
// 	response.end('Hello'); // complete the request and send info with it in parameter
// }).listen(1999, '127.0.0.1'); //which port to listen to
// console.log('Webserver has started');

var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
	fs.readFile('index.html', function(err, data){
		response.writeHead(200,{'Content-type':'text/html'}); // header, 200 is a normal request, can take a set of options:content-type
		response.end(data);
	});

}).listen(1999, '127.0.0.1'); //which port to listen to
console.log('Webserver has started');

