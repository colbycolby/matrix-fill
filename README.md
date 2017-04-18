# matrix-fill [![NPM version](https://img.shields.io/npm/v/fill-range.svg?style=flat)](https://www.npmjs.com/package/matrix-fill)

> Create and fill in 2D Array of any type.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save matrix-fill
```

## Usage

Returns 2D array of values of any type.

```js
const fill = require('matrix-fill');

console.log(fill('abc', 5, 5))
//=> [ [ 'abc', 'abc', 'abc', 'abc', 'abc' ],
//     [ 'abc', 'abc', 'abc', 'abc', 'abc' ],
//     [ 'abc', 'abc', 'abc', 'abc', 'abc' ],
//     [ 'abc', 'abc', 'abc', 'abc', 'abc' ],
//     [ 'abc', 'abc', 'abc', 'abc', 'abc' ] ]


console.log(fill(5, 5, 5))
//=> [ [ 5, 5, 5, 5, 5 ],
//     [ 5, 5, 5, 5, 5 ],
//     [ 5, 5, 5, 5, 5 ],
//     [ 5, 5, 5, 5, 5 ],
//     [ 5, 5, 5, 5, 5 ] ]


console.log(fill({name: 'steve'}, 3, 3));
// [ [ { name: 'steve' }, { name: 'steve' }, { name: 'steve' } ],
//   [ { name: 'steve' }, { name: 'steve' }, { name: 'steve' } ],
//   [ { name: 'steve' }, { name: 'steve' }, { name: 'steve' } ] ]
```

**Params**

```js
fill(value, rows, columns);
```

* `value`: **{*}** the value to fill the matrix with.
* `rows`: **{Number}** the number of rows in the matrix.
* `columns`: **{Number}** the number of columns in the matrix.
