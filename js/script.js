// code solution here
//
// function User (name, email){
//   this.name = name;
//   this.email = email;
// }
//
// User.prototype.sayHello = function(){
//   console.log("Hello, my name is "+ this.name);
// }
//
// kevin = new User("kevin", "kevin@aol.com");
//
// kevin.sayHello();

function President(name, politicalParty, yearsInOffice, homeState) {
  this.name = name;
  this.politicalParty = politicalParty;
  this.yearsInOffice = yearsInOffice;
  this.homeState = homeState;
}

President.prototype.veto = function(){
  return "NO!";
}

President.prototype.passBill = function(){
  return "You can do that!";
}

President.prototype.doCharity = function(){
  return "I like to help people.";
}

President.prototype.conductPressInterview = function(){
  return "I am proud to be an American.";
}

President.prototype.sayHi = function(){
  return "Hi, my name is " + this.name + ". I am from " + this.homeState +
  ". I represent the " + this.politicalParty + "s, and was in office " + this.yearsInOffice +".";
}

var georgeWashington = new President("George Washington", "Democrat", "?-?", "Delware");
var abrahamLincoln = new President("Abraham Lincoln", "Democrat", "?-?", "North Carolina");
var richardNixon = new President("Richard Nixon", "Republican", "?-?", "Texas");
var jimmyCarter = new President("Jimmy Carter", "Republian", "?-?", "Hollywood");
