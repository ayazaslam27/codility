function solution(K, M, A) {
  let lowerMax = Math.max(...A);
  let upperMax = A.reduce((acc, currentItem) => {
    acc = acc + currentItem;
    return acc;
  }, 0);

  if (K === 1) return upperMax;
  if (K > A.length) return lowerMax;

  let mid = 0;

  while (lowerMax <= upperMax) {
    mid = parseInt((lowerMax + upperMax) / 2);

    let blocks = 0;
    let sum = 0;

    for (let i = 0; i < A.length; i++) {
      sum += A[i];
      if (sum > mid) {
        blocks++;
        sum = A[i];
      }

      if (blocks > K) break;
    }

    if (blocks < K) {
      upperMax = mid - 1;
    } else {
      lowerMax = mid + 1;
    }
  }
  return lowerMax;
}

// console.log(solution(3, 6, [5, 2, 3, 4, 6]));
console.log(solution(3, 5, [2, 1, 5, 1, 2, 2, 2]));
