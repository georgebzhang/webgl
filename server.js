var express = require('express');
var path = require('path');
var app = express();

app.use('/src', express.static(__dirname + '/files'));

app.get('/', function(request, response) {
	response.sendFile('index.html', {root: path.join(__dirname, './files')});
});

app.listen(1337, function() {
	console.log('Listening at Port 1337.');
});