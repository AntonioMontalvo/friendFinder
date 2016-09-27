//Module Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Sets up how express is configured.

var app = express();//assign express to app

//When hosting the application on another enviroment like Heroku, your host may confifure the process.env.PORT for you, So the solution is setting PORT to be whatever the enviroment PORT is on Hreroku, or 3000 if you are not on Heroku, like your local machine.
var PORT = process.env.PORT || 3000;

//Sets up how express uses 'body-parser'/ Now the server can intrepret data sent to it.

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