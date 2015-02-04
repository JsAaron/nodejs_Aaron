var http = require("http");

var app = http.createServer(function(request, response) {
	response.writeHead(200, {
		"Content-Type": "text/plain"
	});
	response.end("Hello world!");
});

app.listen(3000, "localhost");

// var express = require('express');
// var app = express();
// var routes = require('./routes');

// routes(app)
// app.listen(3000);



// var express = require('express');
// var app = express();

// app.use(express.static(__dirname + '/public'));

// app.listen(8080);