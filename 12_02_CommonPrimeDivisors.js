// If two numbers have the same prime divisors then
// the gcd of both numbers and the result of each number divided by
// gcd must have the same prime divisors too.

function solution(A, B) {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    if (hasCommonPrimeDivisors(A[i], B[i])) {
      count++;
    }
  }
  return count;
}

function hasCommonPrimeDivisors(a, b) {
  let gcd = greatestCommonDivisor(a, b);

  while (a !== 1) {
    let gcda = greatestCommonDivisor(a, gcd);
    if (gcda == 1) {
      return false;
    }

    a = parseInt(a / gcda);
  }

  while (b !== 1) {
    let gcdb = greatestCommonDivisor(b, gcd);
    if (gcdb == 1) {
      return false;
    }

    b = parseInt(b / gcdb);
  }

  return true;
}

function greatestCommonDivisor(N, M) {
  if (N % M === 0) return M;
  else {
    return greatestCommonDivisor(M, N % M);
  }
}

console.log(solution([15, 10, 3], [75, 30, 5]));
