//First we take care of the dependency. We include the path module to get the correct file path for our html.
var path = require('path');

//ROUTING
//We use the exports module
//Here we handle routes. If we get '/home' we invoke '/..public/home.html'. If we get '/survey' we invoke '/..public/home.html', and by default if there is no match we invoke '/..public/home.html'.

module.exports = function(app) {

	app.get('/home', function(req, res) {
		res.sendFile('home.html', {root: path.join( __dirname, '../public')});
	});

	app.get('/survey', function(req, res) {
		res.sendFile('survey.html', {root: path.join( __dirname, '../public')});
	});	


	app.get('', function(req, res) {
		res.sendFile('home.html', {root: path.join( __dirname, '../public')});
	});
// if no matching route is found, default to home
	// app.use(function (req, res){
	// 	res.sendFile('home.html', {root: path.join( __dirname, '../public')});
	// });

};