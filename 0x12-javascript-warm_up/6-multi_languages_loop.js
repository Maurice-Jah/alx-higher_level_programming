#!/usr/bin/node
/* script that prints 3 lines: (like 1-multi_languages.js) but by using an
array of string and a loop */
let args = ['C is fun', 'Python is cool', 'JavaScript is amazing'];
for (let arg in args) {
  console.log(args[arg]);
}
