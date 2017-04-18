'use strict';

/**
 * Return a matrix of val
 *
 * @param  {Number} `row` number of rows
 * @param  {Number} `m` number of columns
 * @param  {*} `val`
 * @return {*[][]} `matrix` of val
 */

function fillRange(val, row, col){
  const res = [];
  while(row){
    res.push(Array(col).fill(val));
    row--;
  }
  return res;
}
module.exports = fillRange;
