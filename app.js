/** Requiring Moduel **/
var greet = require('./greet');

/** Object Literal **/
var person = {
    firstname: 'John',
    lastname: 'Doe',
    greet: function(){
      console.log('hello, ' + this.firstname + ' ' + this.lastname);
    }
}

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

/** Prototype extends class function **/
Person.prototype.yell = function() {
  console.log('WOW! ' + this.firstname + ' ' + this.lastname);
};

/**************** Test ****************/
/* Testing module export from greeting folder*/
greet.english()
greet.spanish()

var yu = new Person('Yu','Zhou');
yu.yell()
console.log(yu.__proto__);
