function solution(N) {
  let i = 1;
  let perimeter = Infinity;

  if (N === 1) return 2 * 2;

  while (i * i <= N) {
    if (N % i === 0) {
      perimeter = Math.min(perimeter, 2 * (i + N / i));
    }
    i++;
  }

  return perimeter;
}

console.log(solution(30));
console.log(solution(24));
console.log(solution(1));
