const FroogJump = (X, A) => {
  let sum = 0;

  const positionCovered = {};
  for (let index = 1; index <= X; index++) {
    positionCovered[index] = false;
    sum = sum + index;
  }

  for (let index = 0; index < A.length; index++) {
    const element = A[index];

    if (positionCovered[element] == false) {
      positionCovered[element] = true;
      sum = sum - element;
    }

    if (sum === 0) {
      return index;
    }
  }

  return -1;
};
// console.log(FroogJump(3, [1, 3, 1, 3, 2, 1, 3]));
// console.log(FroogJump(3, [1, 2, 3]));
// console.log(FroogJump(3, [1, 3]));
console.log(FroogJump(5, [1, 3, 1, 4, 2, 3, 5, 4]));
// console.log(FroogJump(5, [1, 3, 3, 5, 2, 3, 4, 5]));
// console.log(FroogJump(5, [1, 3, 9, 4, 5, 2, 5, 4]));
