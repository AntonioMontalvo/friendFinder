//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Sets up how express is configured.

var app = express();//assign express to app
var PORT = process.env.PORT || 80;

//Sets up how express uses 'body-parser'/ Now the serever can intrepret data sent to it.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json' }));


//ROUTER
//When the client makes a request, these routes give our server the correct paths. 

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

//LISTENER
//The server can listen on the designated PORT

app.listen(PORT, function(){
	console.log("Server listening on PORT: " + PORT);
}); 