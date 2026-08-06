// Starter file — add your code here
const buf = Buffer.from('Hello, Node!');
console.log(buf);
console.log(buf.toString("hex"));
console.log(buf.toString("base64"));
const buf2 = Buffer.alloc(8, 0xff);
console.log(buf2);