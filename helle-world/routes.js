module.exports = function (app) {  
    app.get('/', function (req, res) {  
        res.send('Hello send');
    });
    app.get('/aaron/', function (req, res) {  
        res.send('aaron');
    });
};