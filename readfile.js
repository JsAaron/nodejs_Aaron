var fs = require('fs');

fs.readFile('file.txt','utf-8',function(err,data){
	console.log(data)
})
console.log(111)