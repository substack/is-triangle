var test = require('tape');
var isTriangle = require('../');

test('2d', function (t) {
    t.equal(isTriangle([ [ 3, 0 ], [ 4, 1 ], [ 5, 2 ] ]), false);
    t.equal(isTriangle([ [ 3, 0 ], [ 4, -2 ], [ 5, 2 ] ]), true);
    t.end();
});

test('3d', function (t) {
    t.equal(isTriangle([ [ 3, 0, 0 ], [ 4, 1, 0 ], [ 5, 2, 0 ] ]), false);
    t.equal(isTriangle([ [ 3, 0, 0 ], [ 4, -2, 0 ], [ 5, 2, 1 ] ]), true);
    t.equal(isTriangle([ [ 3, 0, 1 ], [ 4, -2, 1 ], [ 5, 2, 1 ] ]), true);
    t.end();
});
