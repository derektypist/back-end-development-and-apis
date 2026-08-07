// Starter file — add your code here
const crypto = require("crypto");
const hash = crypto.createHash("sha256").update("freeCodeCamp").digest("hex");
console.log(hash);