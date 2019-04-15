---
title: JS Tricks
date: 2019-04-14
spoiler: JavaScript methods
category: js
---

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