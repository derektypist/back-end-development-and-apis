// Starter file — add your code here
const crypto = require("crypto");
const random = crypto.randomBytes(16).toString("hex");
console.log(random);