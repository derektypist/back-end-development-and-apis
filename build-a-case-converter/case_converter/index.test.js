const assert = require('node:assert/strict');
const caseConverter = require("./index");

assert.strictEqual(caseConverter.getUpperCase("hello free Code Camp!"),"HELLO FREE CODE CAMP!");