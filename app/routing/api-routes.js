//IN THIS FILE WE ARE BASICALLY WORKING AROUND DATA. THAT IS WHAT DATA WE SHOW WHEN THE USER VISITS A LINK
//LOAD DATA
//Since we are linking our routes to the data contained in friends.js, we use require to grab the access the DATA.

var friendsData = require('../data/friends.js');

//ROUTING
//we use de exports module
//here we handle routes. 

module.export = function (app){
//First we handle the API GET Requests

	app.get('api/friendsData', function(req, res){
		res.json(friendsData);
	});

//Second we take care of the POST API Requests
//Here we handle the for submition to the server. The server gets a JSON object, which is saved to the friendsArray.

	app.post('api/friendsData', function(req, res){
		friendsData.push(req.body);
	});


};