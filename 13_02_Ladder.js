function solution(A, B) {
  let fibonaccis = [0, 1, 1];

  for (let i = 3; i <= A.length + 1; i++) {
    fibonaccis[i] = (fibonaccis[i - 1] + fibonaccis[i - 2]) % Math.pow(2, 30);
  }

  fibonaccis.shift(); //remove the zero

  let results = [];
  for (let i = 0; i < A.length; i++) {
    results.push(fibonaccis[A[i]] % Math.pow(2, B[i]));
  }

  return results;
}

console.log(solution([4, 4, 5, 5, 1], [3, 2, 4, 3, 1]));
