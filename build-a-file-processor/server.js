// Starter file — add your code here
const path = require("path");
const fullPath = path.join(__dirname, "assets", "poem.txt");
console.log(fullPath);
console.log(path.basename(fullPath));
console.log(path.dirname(fullPath));
console.log(path.extname(fullPath));
console.log(path.join("assets", "..", "server.js"));
console.log(path.resolve("assets", "..", "server.js"));
console.log(path.parse(fullPath));