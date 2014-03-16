var isTriangle = require('../');
console.log(isTriangle([ [ 3, 0 ], [ 4, 1 ], [ 5, 2 ] ])); // false
console.log(isTriangle([ [ 3, 0 ], [ 4, -2 ], [ 5, 2 ] ])); // true
