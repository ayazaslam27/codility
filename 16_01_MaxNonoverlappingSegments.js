function solution(A, B) {
  if (A.length <= 1) {
    return A.length;
  }

  let prevEnd = B[0];
  let count = 1;

  for (let i = 1; i < A.length; i++) {
    if (A[i] > prevEnd) {
      count++;
      prevEnd = B[i];
    }
  }
  return count;
}

console.log(solution([1, 3, 7, 9, 9, 1], [5, 6, 8, 9, 10, 11]));
