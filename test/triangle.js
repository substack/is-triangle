var test = require('tape');
var isTriangle = require('../');

test('triangles', function (t) {
    t.equal(isTriangle([ [ 3, 0 ], [ 4, 1 ], [ 5, 2 ] ]), false);
    t.equal(isTriangle([ [ 3, 0 ], [ 4, -2 ], [ 5, 2 ] ]), true);
    t.end();
});
