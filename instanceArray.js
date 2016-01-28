/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.
var users = [];
  //code here


//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

  //code here
 users.push(new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS'));

console.log('Tyler\'s information is ' + users[0]);
//Console.log all of Tylers information

  //code here
  users.push(new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags'));

console.log('Lenny\'s information is ' + users[1]);
//Now console.log all of Lennys information

  //code here
  users.push(new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup'));



//Now create another instance of User using your own information and then add that to your users array.
  users.push(new User('Kyle', 'ktprestgard@gmail.com', 'codingIsFun'));
  //code here
  

console.log('All my users names are '+ users[0].name, + users[1].name, + users[2].name, + users[3].name );
//Now loop through your users Array and console.log every users name. 
for (var i in users) {
  console.log('All my users names are '+ users[i].name);
};
  //code here
