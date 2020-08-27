function solution(N, M) {
  let gcd = greatestCommonDivisor(N, M);
  let lcm = (N * M) / gcd;

  return lcm / M;
}

function greatestCommonDivisor(N, M) {
  if (N % M === 0) return M;
  else {
    return greatestCommonDivisor(M, N % M);
  }
}

console.log(solution(10, 4));
