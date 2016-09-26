//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Sets up express

var app = express();
var PORT = 3000;

//Sets up how express uses 'body-parser'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json' }));