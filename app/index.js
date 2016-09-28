var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
  res.send('Hello Express JS!');
});

app.get('/home',function(req,res){
	res.sendFile(path.join(__dirname+'/home.html'));
});

app.get('/postfile',function(req,res){
	res.sendFile(path.join(__dirname+'/post.html'));
});

app.post('/data',function (req, res) {
  res.send('Got a POST request '+req+'<br>'+res.fname);
});

app.put('/user', function (req, res) {
  res.send('insert update will called here in user');
});

app.delete('/user', function (req, res) {
  res.send('delete file from user path is called');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});