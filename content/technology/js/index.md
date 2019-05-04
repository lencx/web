---
title: JS Tricks
date: 2019-04-14
type: technology
spoiler: JavaScript methods
category: js
tags: [js, tricks]
readTime: 10 min
---

<!-- ```js{5,7-12} -->
```js
/**
 * matrixMultiply
 * @param {array} MatrixA - 2D-array
 * @param {array} MatrixB - 2D-array
 */
export const matrixMultiply = (MatrixA, MatrixB) => {
  const result = new Array(MatrixA.length).fill(0)
    .map(_row => new Array(MatrixB[0].length).fill(0));

  return result.map((row, i) => {
    return row.map((_val, j) => {
      return MatrixA[i].reduce((sum, elm, k) => sum + (elm * MatrixB[k][j]), 0);
    });
  });
}

/**
 * matrixTranspose
 * @param {array} matrix - 2D-array
 * @example
 * => matrixTranspose([[1, 2, 3], [4, 5, 6]])
 * => result: [[1, 4], [2, 5], [3, 6]]
 */
export const matrixTranspose = matrix => matrix[0]
  .map((_, i) => matrix.map(row => row[i]));
```

```js
/**
 * Returns a function that can be called with an object. The return value of the
 * new function is a copy of the object excluding the key passed initially.
 */
const omit = key => object => {
  const { [key]: toRemove, ...rest } = object;
  return rest;
}
```