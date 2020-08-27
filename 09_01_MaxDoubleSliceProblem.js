function solution(A) {
  if (A.length <= 3) return 0;

  let leftSums = Array(A.length);
  let rightSums = Array(A.length);

  leftSums[0] = 0;
  leftSums[A.length - 1] = 0;
  rightSums[0] = 0;
  rightSums[A.length - 1] = 0;

  let maxSum = 0;

  for (let i = 1; i < A.length - 1; i++) {
    leftSums[i] = Math.max(0, leftSums[i - 1] + A[i]);
  }

  for (let i = A.length - 2; i > 0; i--) {
    rightSums[i] = Math.max(0, rightSums[i + 1] + A[i]);
  }

  //[0, 2, 8, 7, 11, 16, 15, 0]
  //[0, 16, 14, 8, 9, 5, 0, 0]

  for (let index = 1; index < A.length - 1; index++) {
    let sum = leftSums[index - 1] + rightSums[index + 1];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

console.log(solution([3, 2, 6, -1, 4, 5, -1, 2]));
// console.log(solution([3, 8, 8, 1, 8, 8, 1]));
// console.log(solution([3, 8, 1, 8, 8, 8, 1]));
