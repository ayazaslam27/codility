function solution(A) {
  if (A.length < 3) {
    return 0;
  }

  let count = 0;

  A.sort((a, b) => a - b);

  //[1, 2, 5, 8, 10, 12]
  for (let i = 0; i < A.length - 2; i++) {
    const side1 = A[i];

    let k = i + 2;

    for (let j = i + 1; j < A.length; j++) {
      const side2 = A[j];

      while (k < A.length && side1 + side2 > A[k]) {
        k++;
      }
      if (k > j) {
        count += k - j - 1;
      }
    }
  }

  return count;
}

console.log(solution([10, 2, 5, 1, 8, 12]));
