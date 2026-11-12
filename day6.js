/*function add(a, b) {
  return a + b;
};
const result = add(5,10);
console.log(result); // output 15
//Assignment 1
function introduce(name) {
  console.log (`My name is ${name}`);
};
introduce("David");
*/

//Assignment 2
/*function multiply(a, b) {
return a * b;
};
console.log(multiply(5, 4));
*/
//Assignment 3 (Real backend style)
function createProduct(name, price) {
const product =  {
  name:"Phone",
  price: 500
};
return product;
}
const myProduct = createProduct("Laptop", 1200);
console.log(myProduct.price);


function createProduct(name, price) {
  return {
    name: name,
    price: price
  };
};
/*const product = createProduct("Laptop", 1200)
console.log(product.name);


const phone = createProduct("iPhone", 900);
console.log(phone.name);


//Building a payment website 
function createPayment(amount, currency,) {
  return {
    amount: amount,
    currency: currency,
    status: "Pending"
  };
}
const payments = [];
payments.push(createPayment(100, "USD"));
payments.push(createPayment(50, "EUR"));
console.log(payments[1].currency); 
*/