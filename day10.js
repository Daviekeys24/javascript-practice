//Async and await
/*async function greet() {
  return "Hello";
  
}
greet().then(function(result){
  console.log(result);
}); //async functions always return a promise
*/

/*async function showData(){
  console.log("Loading...");
  const result = await getData();
  console.log(result);
}
showData();


function test(){
  return new
Promise(function(resolve){
    resolve("Done");
  });
}
async function run(){
  console.log("Start");
  const result = await test(); // await = wait for promise result before continuing 
  console.log(result);
}
run();
//await pauses execution inside an async function until the promise resolves(or rejects), then continue with the result.

/*async function test(){
  console.log("1");
  await Promise.resolve();
  console.log("3")
}
test();
console.log("2");

function getName(){
  return Promise.resolve("David");
}
getName()
.then(function(name){
  console.log(name);
})
  */
 /*function getName() {
  return Promise.resolve("David");
 }
 async function showName() {
  const name = await getName();
  console.log(name);
 }
 showName();
 */

 /*function getFood() {
  return Promise.resolve("Pizza");
 }
 async function eat() {
  console.log("Ordering");
  const food = await getFood();
  console.log(food);
 }
 eat();

console.log(cc(3));
*/

function getGreater (a, b) {
  if(a > b) {
    return "a greater than b";
  } else {
    return "Choose another number";
  }
}
console.log(getGreater(12, 5));
