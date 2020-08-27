const Triangle = (A) => {
  A.sort((a, b) => a - b);

  for (index = 0; index < A.length; index++) {
    if (
      A[index] + A[index + 1] > A[index + 2] &&
      A[index + 1] + A[index] > A[index + 2] &&
      A[index + 2] + A[index + 1] > A[index]
    ) {
      return 1;
    }
  }

  return 0;
};

console.log(Triangle([10, 2, 5, 1, 8, 20]));
