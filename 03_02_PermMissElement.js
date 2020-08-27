function PermMissElement(A) {
  let sum = 0;
  let actualSum = 0;
  for (let index = 1; index <= A.length + 1; index++) {
    const element = A[index - 1];
    actualSum += element || 0;
    sum += index;
  }

  return sum - actualSum;
}

console.log(PermMissElement([]));
