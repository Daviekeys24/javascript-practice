 //Callbacks + real node.js style 
function greet(name) {
  console.log("Hello " + name);
};
greet("David");

// A call back is simply a function passed into another function
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}; 

function afterGreeting() {
  console.log("This runs after greeting");
}
greet("David", afterGreeting);


function processPayment(amount, callback) {
  console.log("Processing payment of " + amount);
  callback()
};
processPayment(500, function() {
  console.log("Payment successful!");
});


function sayHi(callback) {
  console.log("Hi");
  callback()
};
sayHi (function(){
  console.log("Bye");
});

function processPayment (amount, callback) {
  console.log(`Processing payment: ${amount}`);
  callback();
};
processPayment (500, function(){
  console.log(`Payment sucessful!`);
});
console.log("Continue using app");


function login(username, callback) {
  console.log(`${username} logged in`);
  callback();
};
login("David", function() {
  console.log(`Loading dashboard....`);
});


function login(username, callback){
  console.log(`${username} logged in`);
  callback();
};
login("David", function(){
  console.log(`Loading dashbaord...please wait`);
});

function calculate(a, b, callback) {
  const result = a + b;
  callback(result);
}
calculate(5, 3, function(answer){
  console.log(answer);
}); // the answer becomes the callback(result) which is 8

//Challenge 
function sendEmail (email, callback) {
  console.log(`Seding email to ${email}`);
  callback(email);
}
sendEmail("david@gmail.com", function(address){
  console.log(`Email sent successfully to ${address}`);
}); // The value store in email is passed into the callback and received by the parameter address

function processPayment(amount, callback){
  console.log(`Processing ${amount}`);
  callback(amount);
}
processPayment(1000, function(money){
  console.log(`Payment of ${money} completed`);
});


// Day 8 part 2: Callback flow control
//Sucess and failure system
function processPayment (amount, callback) {
  console.log(`Processing payment of ${amount}`);
  if(amount > 500) {
    callback("SUCCESS");
  } else{
    callback("FAILED");
  }
}
processPayment(400, function(status){
  console.log(`Payment status: ${status}`);
}); // what changed? before callback only receives values now it receives decision results

function registerUser(name, callback) {
  if(name === ""){
    callback("ERROR: Name required", null);
  } else {         
    callback(null, name + " registered");
  }
}
registerUser("David", function(error, success){
  if(error){
    console.log(error);
  }else{
    console.log(success);
  }
});

function checkAge(age, callback){
  if(age>= 18) {
    callback(null, "Allowed");
  } else{
    callback("Too young", null);
  }
}
checkAge(20, function(error, result){
  if(error){
    console.log(error);
  }else {
    console.log(result);
  }
});