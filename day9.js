//Promise.... resolve()-> success -> .then(). reject() -> failure -> .catch()
/*const payment = new 
Promise(function(resolve, reject){
  const success = true;
  if (success) {
    resolve("Payment successful")
  } else{
    reject ("Payment failed");
  }
});
*/

/*const result = new 
Promise(function(resolve, reject){
  resolve("Money received");
});
result.then(function(message){
  console.log(message);
}); // Js secretly does: message = "Money received"


const check = new 
Promise(function(resolve, reject){
  const loggedIn = false 
  if(loggedIn) {
    resolve("Welcome back")
  }else {
    reject("Please log in")
  }
});
check
.then (function(result){
  console.log(result);
})
.catch(function(error){
  console.log(error);
});
*/

/*const exam = new
Promise(function(resolve, reject){
const score = 45;
if(score >= 50) {
  resolve("You passed");
} else {
  reject("You failed");
}
});
exam
.then(function(result){
  console.log(result);
})
.catch(function(error){
  console.log(error);
});

const newUser = new 
Promise(function(resolve, reject){
  const loggedIn = true;
  if(loggedIn) {
    resolve("Welcome back!");
  } else {
    reject("Please log in");
  }
});
newUser
.then(function(result){
  console.log(result);
})
.catch(function(error){
  console.log(error);
});
*/


// Promise chaining 
/*const login = new 
Promise(function(resolve, reject){
  const loggedIn = true
  if(loggedIn) {
    resolve("David");
  }else {
    reject("Login failed");
  }
});

login 
.then (function(username){
  console.log(`${username} logged in`);
  return "Loading profile...";
})
.then(function(message){
  console.log(message);
})
.catch(function(error){
  console.log(error);
});
*/

/*const test = new 
Promise(function(resolve, reject){
  resolve("A");
});
test
.then(function(a){
  console.log(a);
  return "B";
})
.then(function(b){
  console.log(b);
  return "C";
})
.then(function(c){
  console.log(c);
}); // whatever u return in .then() becomes input for the next .then
*/

function step1() {
  return Promise.resolve("A");
}
step1()
.then(function(result){
  console.log(result);
  return "B";
})
.then(function(result){
  console.log(result);
  return "C";
})
.then(function(result){
  console.log(result);
});


Promise.resolve("David")
.then(function(user){
  console.log(`${user} logged in`);
  return `${user}'s profile loaded...`;
})
.then(function(profile){
  console.log(profile);
  return "Dashboard ready";
})
.then(function(status){
  console.log(status);
});