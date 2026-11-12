     // Objects 
/*const user = {
  name: "David",
  age: 25,
  country: "Nigeria",
  job: "Backend developer"
};
console.log(user);
//user.age = 27; //updating properties
//user.job = "Backend developer";
const userInfo = user
console.log(userInfo);
console.log(user.name);
console.log(user.age);
console.log(user.country);
*/

//console.log(user)

//Assignment 1 create an object called student and print the properties
/*const student = {
  name: "Divine",
  age: "20",
  course: "Mass communication"
};
student.level = 300;
console.log(student.name);
console.log(student.age);
console.log(student.course);

console.log(student);



//Assignment 2 Add a new property (student level)
//Assignment 3create an object for a payment
 const payment = {
  amount: 100,
  currency: "USD",
  status: "Pending"
};
console.log(`Payment of ${payment.amount} ${payment.currency} is ${payment.status}`);
*/
/*
function payment(balance) {
  if (balance < 100) {
    return "Low balance, add fund";
  } else if (balance > 100) {
    return "Successful, payment received!";
  };
};
console.log(payment(150));

const wallet = {
  owner: "David",
  balance: 500,
  currency: "USD"
};
console.log(`${wallet.owner} has ${wallet.balance} ${wallet.currency} in his wallet.`);
*/

//Instead of having too many const you can group the objects under an array 
const users = [
  {name: "David", age: 25},
  {name: "John", age: 30},
  {name: "Sarah", age: 28}
];
//console.log(users[0].name);

 //Loop through users
for (let i = 0; i < users.length; i++) {
  //console.log(users[i].age);
};


//Assignment 1 create an array of products:
const products = [
  {name: "Phone", price: 500},
  {name: "Laptop", price: 1200},
  {name: "Headphones", price: 100}
];
for (let i = 0; i < products.length; i++) {
  console.log(`${products[i].name} costs ${products[i].price} USD`);
};      


