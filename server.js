var express = require('express');
var path = require('path');
var serverStatic = require('server-static');

var app = express();
app.use(serverStatic(__dirname + "/dist"));
var port = process.env.Port || 5000;
app.listen(port);