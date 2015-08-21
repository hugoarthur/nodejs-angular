var express = require('express');
var app = express();

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});

app.use(express.static(__dirname + '/client'));

// Here's the new code:
app.use('/*', function(req, res){
  res.sendFile(__dirname + '/client/view/index.html');
});

app.get('/rest/users', function(req, res) {
	var user = {name:'John', lastName: 'Doe'};

	res.send(user);
});