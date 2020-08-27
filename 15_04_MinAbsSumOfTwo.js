function solution(A) {
  A.sort((a, b) => a - b);
  //[-3, 1, 4]
  let front = 0;
  let back = A.length - 1;
  let value = Infinity;
  while (front <= back) {
    let sum = A[front] + A[back];
    value = Math.min(value, Math.abs(sum));

    if (sum > 0) back--;
    else front++;
  }

  return value;
}

console.log(solution([1, 4, -3]));
