//Array Methods (Filter, find, map)
const payments = [
  {amount: 100, currency:"USD"},
  {amount: 50, currency: "EUR"},
  {amount: 200, currency:"GPB"}
];
/*const bigPayments = payments.filter(payment => payment.amount > 100);
console.log(bigPayments); //Think of filter as sieve- means keep only the items that pass my test
*/
const eurPayment = payments.find(payment => payment.currency === "EUR");
console.log(eurPayment); //find: give me the first item that matches.

/*
//Difference btw find and filter is that find() returns one item while filter() returns an array of matching items
//for only currencies:
const currencies = payments.map(payment => payment.currency);
console.log(currencies); //Map transforms data- means; take every item, transform it and give me a new array
*/

//Assignment 1
const products = [
  {name: "Phone", price: 500},
  {name: "Laptop", price: 1200},
  {name: "Headphones", price: 100}
];
const hugeProducts = products.filter(product => product.price > 300);
console.log(hugeProducts);


//Assignment 2
const Laptop = products.find(product => product.name === "Laptop");
console.log(Laptop);

//Assignment 3
const productNames = products.map(product => product.name);
console.log(productNames);


