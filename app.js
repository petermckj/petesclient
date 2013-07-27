var http = require('http');
var sys = require('sys');
var express = require('express');
var config = require('./lib/config');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.limit('1mb'));
app.use(express.cookieParser());
app.use(express.bodyParser());

var server = app.listen(config.port);
console.log("server running on port: " + config.port);

app.post("/",function(req, res){
	res.redirect('http://127.0.0.1:' + config.port + '/index.htm');
});

app.get("/",function(req, res){
	res.redirect('http://127.0.0.1:' + config.port + '/index.htm');
});

app.post("/retrieve", function(req, res){
	v/*ar uid = svr.parseUserId(req.body);
	console.log('uid:' + uid);
	if(!uid||uid===-1){
		res.writeHead(500, {
			'Content-Type': 'application/json'
		});
		res.end(svr.writeResponse(null));
		return;
	}
	
	var result = connector.findByID(uid,function(id){
		var code = id===null?500:200;
		res.writeHead(code, {
			'Content-Type': 'application/json'
		});
		res.end(svr.writeResponse(id));
	});*/
});

app.post("/survey", function(req, res){
	/*
	
	var result = connector.saveResponse(req.body, function(id){
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.end(svr.writeResponse(id));
	});
	*/
	
	//work out how to get res in to closure so that we can DRY up this code
});