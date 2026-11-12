// either true or false 

const { useCallback } = require(React, "react");

// for true = 1 and for false = 0
let x = true 
let y = false 
//numbers 
let num1 = 2;
let num2 = 5;
let result1 = num1 + x + num2;
console.log('result1 ' = num1 + x + num2 ); // will return 8 in the console 

let result2 = num1 + y + num2;
console.log('result2' = num1 + y + num2); // will return 7 in the console 

function minusSeven(num) {
  return num - 7
}
console.log(minusSeven(10))

function trueOrFalse(wasThatTrue) {
  if(wasThatTrue) {
    return "Yes, that was true"
  }
  return "No, that was false"
};
console.log(trueOrFalse(true)); //will return "Yes, that was true"

function testEqual(val) {
  if(val == 12) {
    return "Equal"
  }
  return "Not equal"
};
console.log(testEqual(10));

//switch statements:
function caseInSwitch(val) {
  var answer = ""
  switch(val){
    case 1:
      answer = "alpha";
      break;
    case 2: 
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    default: 
      answer = "not found";
      break;
  }
  return answer;
};
console.log(caseInSwitch(1)) // will return "alpha " in the console.


function isLess(a, b) {
  return a < b
};
console.log(isLess(5, 8)) // will return true in the console.
function abTest (a, b) {
  if(a < 0 || b < 0) {
    return undefined 
  }
  return Math.random(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2)); 
};

function myName () {
  if (myName = "") {
    return "Name recorded"
  } else {
    return "Please type a word"
  }
};
console.log(myName("Davie"))

//Id 
document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();
const fullName = document.getElementById("fullName").value.trim();
const email = document.getElementById("email").value.trim();
const phone = document.getElementById("phone").value.trim();
const error = document.getElementById("error");

error.textContent = "";

// Full name validation (atleast 2 words; letters only)
const nameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)+$/;

//email validation 
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//phone validation (10-15 digits, optional + at start)
const phoneRegex = /^\+?\d{10,15}$/;

if (!nameRegex.test(fullName)) {
  error.textContent = "Please enter a valid full name (first and last name)."
  retrun;
}
if (!emailRegex.test(email)) {
  error.textContent = "Please eneter a valid email address.";
  return;
}
if (!emailRegex.test(email)) {
  error.textContent = "Please eneter a valid email address.";
  return;
}
alert("form submitted successfully! ");
});


function multiply(a = 3, b = 5) {
  return a * b
};
console.log(multiply()); // returns 15 in the console 
function myVal() {
  if (myVal = "") {
    return "will you be my val"
  } else if (myVal = int){
    return "sorry; already taken"
  }
}
console.log(myVal(2)); 

const hackAthon = "require hacks"; {
  if(hackAthon != "marathon code"){
    return "not enough code exprience"
  } else {
    return "qualified"
  };
}
var colection = {
  "2548": {
    "album": "Slippery when wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468": {
  "album": "1999",
  "artist": "Prince",
  "tracks": [
    "1999",
    "Little Red Corvette"
  ]  
},

}

var myArray = []

var i = 0;
while (i < 5){
  myArray.push(i);
  i++;
}
console.log(myArray) // [0,1,2,3,4]

var ourArray = []
for (var i = 0; i < 5; i++){
  myArray.push(i);
};

  let myArray = [2,7,9,11] 
  masterArray = myArray.unpush(5);
  console.log(masterArray); // should return [5,2,7,9,11] in the console.

  //to check for true or false:
  let kayArray = [2,7,9,11] 
  kayArray.includes(9); // true - in the console

  kayArray.reduce((acc, num) => acc * num, 1); 
  
