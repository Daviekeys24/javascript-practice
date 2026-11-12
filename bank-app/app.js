// Day 12 - Entry point. Run with:  node app.js
// For now we just test the bank functions directly (no menu yet).

const bank = require("./bank");

// Small helper: run one test, catch any error (day11)
function test(label, action) {
  try {
    const result = action();
    console.log(`✅ ${label}:`, result);
  } catch (error) {
    console.log(`❌ ${label}:`, error.message);
  }
}

const david = bank.findUser("David");

test("David's balance", () => bank.getBalance(david));         // 1000
test("Deposit 500", () => bank.deposit(david, 500));            // 1500
test("Withdraw 200", () => bank.withdraw(david, 200));          // 1300
test("Withdraw 5000", () => bank.withdraw(david, 5000));        // Insufficient funds
test("Deposit -50", () => bank.deposit(david, -50));            // Invalid amount
test("Deposit 'abc'", () => bank.deposit(david, "abc"));        // Amount must be a number
test("Find 'Mike'", () => bank.findUser("Mike"));               // User not found

console.log("Final balance:", bank.getBalance(david));          // 1300
