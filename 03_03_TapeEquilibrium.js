const tapeEquilibirum = (A) => {
  let leftSum = 0;
  let rightSum = A.reduce((acc, currentValue) => acc + currentValue);
  let minValue = Infinity;

  for (let i = 0; i < A.length - 1; i++) {
    leftSum += A[i];
    rightSum -= A[i];

    let temp = Math.abs(leftSum - rightSum);

    minValue = Math.min(minValue, temp);
  }

  return minValue;
};

console.log(tapeEquilibirum([3, 1, 2, 4, 3]));
