// Day 12 - Core bank logic (no user input yet)

// NEW: require() loads what data.js exported (the users array)
const users = require("./data");

// Find a user by name using find() (day7)
function findUser(name) {
  const user = users.find(u => u.name.toLowerCase() === name.toLowerCase());
  if (!user) {
    throw new Error("User not found");
  }
  return user;
}

// Shared validation so deposit and withdraw don't repeat the same checks
function validateAmount(amount) {
  if (typeof amount !== "number" || isNaN(amount)) {
    throw new Error("Amount must be a number");
  }
  if (amount <= 0) {
    throw new Error("Invalid amount");
  }
}

function getBalance(user) {
  return user.balance;
}

function deposit(user, amount) {
  validateAmount(amount);
  user.balance = user.balance + amount;
  return user.balance;
}

function withdraw(user, amount) {
  validateAmount(amount);
  if (amount > user.balance) {
    throw new Error("Insufficient funds");
  }
  user.balance = user.balance - amount;
  return user.balance;
}

// Export the functions as one object so app.js can use them
module.exports = { findUser, getBalance, deposit, withdraw };
