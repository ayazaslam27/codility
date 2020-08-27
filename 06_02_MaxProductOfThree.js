function solution(A) {
  A = A.sort((a, b) => a - b);

  //first 3 numbers if all are negative
  let maxProduct = A[0] * A[1] * A[2];

  //last 3 numbers if all are positive
  let currentProduct = A[A.length - 1] * A[A.length - 2] * A[A.length - 3];

  maxProduct = Math.max(maxProduct, currentProduct);

  //if array contains both negative and positive numbers
  currentProduct = A[0] * A[1] * A[A.length - 1];

  maxProduct = Math.max(maxProduct, currentProduct);

  return maxProduct;
}

console.log(solution([-7, -6, -5, -2])); //120
