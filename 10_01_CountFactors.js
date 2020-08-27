function solution(A) {
  let i = 1;
  let result = 0;
  if (A === 1) return 1;

  while (i * i < A) {
    if (A % i === 0) {
      result = result + 2;
    }
    i++;
    if (i * i === A) {
      result++;
    }
  }
  return result;
}

console.log(solution(24));
console.log(solution(2));
