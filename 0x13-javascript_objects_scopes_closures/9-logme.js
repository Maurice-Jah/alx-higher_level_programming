#!/usr/bin/node
/* function that prints the number of arguments already printed and the new
argument value */

let count = 0;
exports.logMe = function (item) {
  // let count = 0;
  console.log(count + ': ' + item);
  count += 1;
}
