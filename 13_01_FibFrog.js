function solution(A) {
  let n = 26; //26 number less than 100k
  const fibonaccis = Array(n).fill(0);

  fibonaccis[1] = 1;
  for (let i = 2; i < n; i++) {
    fibonaccis[i] = fibonaccis[i - 1] + fibonaccis[i - 2];
  }

  let jumps = Array(A.length + 1).fill(null);
  let currentFrogPostion = null;

  for (let i = 2; i < fibonaccis.length; i++) {
    const jumpIndex = fibonaccis[i] - 1;

    if (jumpIndex > A.length) {
      break;
    }

    if (jumpIndex === A.length || A[jumpIndex] === 1) {
      jumps[jumpIndex] = 1;
      if (currentFrogPostion === null) {
        currentFrogPostion = jumpIndex;
      }
    }
  }
  if (currentFrogPostion === null) return -1;

  while (currentFrogPostion < A.length) {
    for (let i = 2; i < fibonaccis.length; i++) {
      const jumpIndex = currentFrogPostion + fibonaccis[i];

      if (jumpIndex > A.length) {
        break;
      }

      if (jumpIndex === A.length || A[jumpIndex] === 1) {
        const x = jumps[currentFrogPostion] + 1;
        const y = jumps[jumpIndex];
        jumps[jumpIndex] = y === null ? x : Math.min(y, x);
      }
    }
    currentFrogPostion++;
    while (currentFrogPostion < A.length) {
      if (jumps[currentFrogPostion] !== null) {
        break;
      }
      currentFrogPostion++;
    }
  }

  if (jumps[A.length] === null) return -1;
  return jumps[A.length];
}

console.log(solution([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]));
