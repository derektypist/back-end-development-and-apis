// Starter file — add your code here
const fs = require("fs");
const writable = fs.createWriteStream("assets/stream-output.txt");
writable.write("First chunk\n");
writable.write("Second chunk\n");
writable.end();