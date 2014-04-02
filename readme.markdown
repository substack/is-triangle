# is-triangle

Return whether an array of 3 points describe a triangle.

[![testling badge](https://ci.testling.com/substack/is-triangle.png)](https://ci.testling.com/substack/is-triangle)

[![build status](https://secure.travis-ci.org/substack/is-triangle.png)](http://travis-ci.org/substack/is-triangle)

# example

``` js
var isTriangle = require('is-triangle');
console.log(istriangle([ [ 3, 0 ], [ 4, 1 ], [ 5, 2 ] ])); // false
console.log(istriangle([ [ 3, 0 ], [ 4, -2 ], [ 5, 2 ] ])); // true
```

# methods

``` js
var isTriangle = require('is-triangle');
```

## isTriangle(pts, opts={})

Return whether the array of `pts` is a triangle, in any dimension.

`pts` is an array array coordinates.

Optionally you can control the tolerance for equality comparisons with
`opts.tolerance`. The default tolerance is `1e-10`.

# install

With [npm](https://npmjs.org/package/is-triangle) do:

```
npm install is-triangle
```

# license

MIT
