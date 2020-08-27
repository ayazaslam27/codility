function solution(A) {
  if (A.length === 1) return A[0];

  let sum = A[0];
  let ending = 0;

  for (const entry of A) {
    ending = Math.max(entry, ending + entry);
    sum = Math.max(sum, ending);
  }

  return sum;
}

// console.log(solution([-1, 1]));
console.log(solution([3, 2, -6, 4, 0]));
