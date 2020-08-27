function solution(N) {
  let currentCount = 0;
  let result = 0;
  let binary = N.toString(2);

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '0') {
      currentCount++;
    } else {
      result = Math.max(result, currentCount);
      currentCount = 0;
    }
  }
  return result;
}

console.log(solution(10));
