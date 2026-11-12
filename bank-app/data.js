// Day 12 - Seed data for the bank app
// Each user is an object (day5). All users live in one array (day5).

const users = [
  { name: "David", pin: "1234", balance: 1000, history: [] },
  { name: "John", pin: "1111", balance: 500, history: [] },
  { name: "Sarah", pin: "2222", balance: 2500, history: [] }
];

// NEW: module.exports lets other files use this array with require()
module.exports = users;
