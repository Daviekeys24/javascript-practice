for (let i = 1; i <= 5; i++) {
  console.log("Hello");
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
for (let i = 10; i >=1; i--) {
  console.log(i);
}
//Assignment 1: print all numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// Assignment 2: print only even numbers from 1 to 20
for (let i = 1; i <= 20; i++)  {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Assignment 3: print only odd numbers from 1 to 20
for (let i = 1; i <= 20; i++)  {
  if (i % 2 === 1) {
    console.log(i);
  }
}

//printing the multiplication table of 7
for (let i = 10; i >=1; i--) {
  const result = 7 * i;
  console.log(`7 * ${i} = ${result}`);
}
// loop-loop
for (let i = 1; i <=10; i++) {
  for (let j = 5; j <= 6; j++){
    const result = j * i;
    console.log(`${j} * ${i} = ${result}`);
  }
}

for (let i = 1; i <= 3; i++) {
  for (let j = 5; j <= 6; j++) {
    console.log(`${j} * ${i} = ${j * i}`);
  }
}

//Multplication table 4 
for (let i = 1; i <= 10; i++) {
  const result = 4 * i;
  console.log(`${result}`);
}

