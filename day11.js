/*
function getBalance() {
  return Promise.resolve(500);
}
async function checkBalance() {
  try {
    console.log("Checking balance...");
    const balance = await 
  getBalance();
  console.log(`Balance: $${balance}`);
  } catch (error) {
    console.log(error);
  }
  console.log("Done");
}
  
checkBalance();

*/
/*
function getBalance() {
  return Promise.reject("Network Error");
}
async function checkBalance() {
  try{
    console.log("Checking Balance...")
    const balance = await 
  getBalance()
  console.log(`Balance: $${balance}`);
  } catch (error) {
    console.log(error);
  }
  console.log("Done")
}
checkBalance();
*/
/*
function login() {
  return Promise.resolve("David");
}
async function start(){
  try{
    console.log("1")
    const user = await
  login();
  console.log("2");
  console.log(user);
  } catch (error) {
    console.log("3")
  }
  console.log("4")
}
console.log("0");
start();
console.log("5");

function getProfile(user) {
  return Promise.resolve(`${user}'s profile`);
}

function getUser() {
  return Promise.resolve("David");
}

function getBalance() {
  return Promise.reject("Bank server is down");
}
async function dashboard() {
  try{
    const user = await 
getUser();
    console.log(user);

    const profile = await
getProfile(user);
console.log(profile);

const balance = await 
getBalance();
    console.log(`Balance: $${balance}`);

  } catch (error) {
    console.log(error);
  }
  console.log("Dashboard process finished");
}
dashboard();


function getUser() {
  return Promise.reject("User not found");
}

function getProfile(user){
  return Promise.resolve(`${user}'s profile`);
}

function getBalance() {
  return Promise.reject("Bank server is down");
}
async function dashboard() {
  try {
    const user = await getUser();
    console.log(user);

    const profile = await getProfile(user);
    console.log(profile);

    const balance = await getBalance();
    console.log(`Balance: $${balance}`);
  } catch (error) {
    console.log("Error:", error);
  }
  console.log("Dashboard finished");
}
dashboard();


async function test() {
  try {
    console.log("A");
    await 
  Promise.resolve("Good");
    console.log("B");
    await 
  Promise.reject("Oops");
    console.log("C")
  } catch (error) {
    console.log("D");
  }
  console.log("E");
}
test();



function getUser() {
  return Promise.resolve("David");
}
function getProfile(user) {
  return Promise.reject("Profile not found");
}

function getBalance() {
  return Promise.resolve(500);
}

async function dashboard() {
  try {
    const user = await getUser();
    console.log("User:", user);
  } catch (error) {
    console.log("User error:", error);
  }
  try {
    const profile = await getProfile("David");
    console.log("Profile:", profile)
  } catch (error) {
    console.log("Profile error:", error);
  }
  try {
    const balance = await getBalance();
    console.log("Balance:", balance);
  } catch (error) {
    console.log("Balance error:", error);
  }
  console.log("Dashboard finished");
}
dashboard();


function checkAge(age) {
  if (age < 18) {
    throw new Error("You must be older");
  }
  return "Access granted";
}
try {
  console.log(checkAge(15));
} catch (error) {
  console.log("Error:", error.message);
}


function withdraw (balance, amount) {
  if (amount > balance) {
    throw new 
    Error("Insufficient funds");
  }
  return balance - amount;
}
try {
  const result = 
withdraw(1000, 1500);
  console.log("Remaining:", result);
} catch (error) {
  console.log("Error:", error.message);
}

console.log("Transaction finsihed");


function withdraw (balance, amount) {
  if(amount > balance) {
    throw new 
  Error("Insufficient funds");
  }
  return balance - amount;
}
try {
  const result = 
withdraw(1000, 500)
  console.log("Remaining:", result);
} catch (error) {
  console.log("Error:", error.message);
}
console.log("Transaction finished");



async function login (username) {
  if (username !== "David") {
    throw new Error("User not found");
    
  }try {
  const result = await login("John");
  console.log(result);
} catch (error) {
  console.log("Error:", error.message);
}
  return "Login successful";
}

login("John");


async function checkBalance(balance) {
  if (balance < 0) {
    throw new 
    Error("Invalid balance");
  }
  return balance;
}
async function dashboard() {
  try {
    const balance = await checkBalance(500);
    console.log("Balance:", balance);
  } catch (error) {
    console.log("Error", error.message);
  }
  console.log("Dashboard finished");
}
dashboard();
*/

/*
try {
// code that might fail
} catch (error) {
 //handle the error
 } finally {
  // Always runs
 }
  

 async function test() {
  try {
    console.log("A");
    await 
  Promise.resolve("Success")
    console.log("B");
  } catch (error) {
    console.log("C");
  } finally {
    console.log("D");
  }
  console.log("E");
 }
 test();


 async function 
 makePayment(balance, amount) {
  try {
    if(amount > balance) {
      throw new 
Error("Insufficient funds");
    }
    console.log("Payment processing...");
    return "Payment successful";
  } catch(error){
    console.log("Payment error", error.message);
  } finally {
    console.log("Payment process ended");
  }
 }
 async function main(){
  const result = await makePayment(1000, 1500)
  console.log(result);
 }
 main();

 

 async function 
 withdraw(balance, amount) {
  try{
    if(amount > balance) {
      throw new 
  Error("Insufficient funds");
    }
    return balance - amount;
  } catch (error) {
    return error.message;
  }
 }

 async function main() {
  const result = await withdraw(1000, 1500);
    console.log("Result:", result);
 }
 main();
 */

 async function 
 withdraw(balance, amount) {
  if (amount <= 0){
    throw new Error("Invalid amount");
  }
  if (amount > balance) {
    throw new 
  Error("Insufficient funds")
  }
  return balance - amount;
 }
 async function main() {
  try{
    const result = await withdraw(1000, 1500);
    console.log("Remaining:", result);
  } catch (error) {
    console.log("Payment failed:", error.message);
  }
  console.log("Transaction finished");
 }
 main();

 