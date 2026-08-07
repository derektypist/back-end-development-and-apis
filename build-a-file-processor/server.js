// Starter file — add your code here
const fs = require("fs");
const readable = fs.createReadStream("assets/poem.txt", {encoding: "utf8"});
readable.on("data", (chunk) => {
    console.log(chunk);
});

readable.on("end", () => {
    console.log("Done reading");
});