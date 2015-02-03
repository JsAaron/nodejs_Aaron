varexpress = require('express');
varapp = express.createServer();
app.use(express.bodyParser());
app.all('/', function(req, res) {
	res.send(req.body.title + req.body.text);
});
app.listen(3000)