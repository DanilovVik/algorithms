/**
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given four lists A, B, C, D of integer values,
 * compute how many tuples (i, j, k, l) there are such that A[i] + B[j] + C[k] + D[l] is zero.
 * To make problem a bit easier,
 * all A, B, C, D have same length of N where 0 ≤ N ≤ 500.
 * All integers are in the range of -2^28 to 2^28 - 1
 * and the result is guaranteed to be at most 2^31 - 1.
 *
 * Example:
 * Input:
 * A = [ 1, 2]
 * B = [-2,-1]
 * C = [-1, 2]
 * D = [ 0, 2]
 *
 * Output:
 * 2
 *
 * Explanation:
 * The two tuples are:
 * 1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
 * 2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0
 *
 * 思路：
 * 多数组嵌套循环的复杂度太高，故把多数组嵌套改为 2 数组嵌套
 */

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  const map = {}
  let result = 0

  for (const a of A) {
    for (const b of B) {
      const num = 0 - (a + b)
      map[num] = (map[num] || 0) + 1
    }
  }

  for (const c of C) {
    for (const d of D) {
      if (map[c + d]) result += map[c + d]
    }
  }

  return result
}

// Testcase
let A;
let B;
let C;
let D;
let result;

A = [ 1, 2]
B = [-2,-1]
C = [-1, 2]
D = [ 0, 2]
result = fourSumCount(A, B, C, D);
console.log(`result: ${result}`);

A = [-1,-1]
B = [-1,1]
C = [-1,1]
D = [1,-1]
result = fourSumCount(A, B, C, D);
console.log(`result: ${result}`);

A = [0,1,-1]
B = [-1,1,0]
C = [0,0,1]
D = [-1,1,1]
result = fourSumCount(A, B, C, D);
console.log(`result: ${result}`);