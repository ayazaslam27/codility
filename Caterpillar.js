function solution(A, S) {
  let front = 0;
  let back = 0;
  let sum = 0;

  while (back <= front) {
    while (front < A.length && sum < S) {
      sum += A[front];
      front++;
    }
    if (sum === S) return [front - 1, back];

    sum -= A[back];
    back++;
  }

  return -1;
}

console.log(solution([6, 2, 7, 4, 1, 3, 6], 12));
