function solution(K, A) {
  let length = 0;
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    length += A[i];

    if (length >= K) {
      count++;
      length = 0;
    }
  }
  return count;
}

console.log(solution(4, [1, 2, 3, 4, 1, 1, 3]));
