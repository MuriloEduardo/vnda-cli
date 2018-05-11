#!/usr/bin/env node
 
const lib = require('../lib/index.js');
const greeting = lib.sayHello('Bret');
const [,, ...args] = process.argv;
 
console.log(args);