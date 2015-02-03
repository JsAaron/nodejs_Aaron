var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	res.write('<h1>Node.js1</h1>');
	res.end('<p>Hello World1114442312</p>');
}).listen(3000);

console.log('http:3000')