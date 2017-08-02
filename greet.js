// Module
// This is a function expression
// Meaning directly initiate an object and assign a newly
// created function to it

var greet = function(){
  console.log('Hello!');
}


// Output the module so other files can access this moduel
module.exports = greet;
