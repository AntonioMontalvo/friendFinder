//IN THIS FILE WE ARE BASICALLY WORKING AROUND DATA. THAT IS, WHAT DATA WE SHOW WHEN THE USER VISITS A LINK
//LOAD DATA
//Since we are linking our routes to the data contained in friends.js, we use require to grab the access the DATA.

var friendsData = require('../data/friends.js');
var userArray =    require('../data/user.js');
var totalDifference = 0;
var superFriend;


//ROUTING
//We use thee exports module
//Here we handle routes. 

module.exports = function (app){
//First we handle the API GET Requests

	app.get('/api/friends', function(req, res){
		console.log('This is the data we give to api/friends, watch the res.json(friendsData on http://localhost:3000/api/friends. It is also logged to the terminal below');
		console.log(JSON.stringify(friendsData));
		res.json(friendsData);

	});

//Secondly we take care of the POST API Requests
//Here we handle the form submission to the server. The server gets a JSON object, which is saved to the friendsArray.

	app.post('/api/friends', function(req, res){
		userArray.push(req.body.scores);
		


function findDifferences (user, match){
  for (var i = 0; i < friendsData.length; i++){
    for (var j = 0; j < 10; j++){
      totalDifference += Math.abs(user[0][j] - parseInt(match[i].scores[j]));
    }
    friendsData[i].difference += totalDifference;
    // console.log(totalDifference)
    // console.log(friendsData[i].name + ' has a difference of '
    //           +friendsData[i].difference + ' with you!');
    totalDifference = 0;
  }
  
}
findDifferences(userArray, friendsData);


 function getAmigo(friends) {
   
  var count = 0;
      for(var i = 0; i < friendsData.length; i++){
        for (var j = 0; j < 10; j++){
          
          if(friendsData[i].difference === 0){
          	superFriend = friendsData[i];
            // console.log('You found your match in ' + friendsData[i].name );
          return;
          }
          
          
          if(friendsData[i].difference < friendsData[j].difference){
            count++;
//             
            // console.log(friendsData[i].name + ' difference is ' + friendsData[i].difference + 
            //             ' and is smaller than  ' + friendsData[j].name +
            //             " whose difference value is " + friendsData[j].difference );
            
          }
          if(count === 9){
          console.log('You found your match in ' + friendsData[i].name );
          superFriend = friendsData[i];
          return;
          }
          if (count !==9){
          	superFriend = friendsData[0];
          }
          
          
        }
        // console.log('I COUNT ' + count + ' TIMES');
        count = 0;
    }
 }
 
getAmigo(friendsData);


res.send(superFriend);
		


	});


};