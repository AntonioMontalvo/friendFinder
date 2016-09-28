//IN THIS FILE WE ARE BASICALLY WORKING AROUND DATA. THAT IS, WHAT DATA WE SHOW WHEN THE USER VISITS A LINK
//LOAD DATA
//Since we are linking our routes to the data contained in friends.js, we use require to grab the access the DATA.

var friendsData = require('../data/friends.js');
var userArray =    require('../data/user.js');

//ROUTING
//We use thee exports module
//Here we handle routes. 

module.exports = function (app){
//First we handle the API GET Requests

	app.get('/api/friends', function(req, res){
		console.log(JSON.stringify(friendsData));
		res.json(friendsData);

	});

//Secondly we take care of the POST API Requests
//Here we handle the form submission to the server. The server gets a JSON object, which is saved to the friendsArray.

	app.post('/api/friends', function(req, res){
		userArray.push(req.body);
		res.send(friendsData);
		


	});


};