function solution(A) {
  if (A.length < 3) return 0;

  let peaks = [];

  for (let index = 1; index < A.length - 1; index++) {
    if (A[index] > A[index - 1] && A[index] > A[index + 1]) {
      peaks.push(index);
    }
  }

  if (peaks.length === 0 || peaks.length === 1) return peaks.length;

  let totalFlags = Math.min(peaks.length, Math.ceil(Math.sqrt(A.length)));
  let totalFlagsUsed = 0;

  for (let flags = totalFlags; flags > 0; flags--) {
    let resultantFlags = 1;
    let minPeak = peaks[0];

    for (let j = 1; j < peaks.length; j++) {
      if (Math.abs(minPeak - peaks[j]) > flags) {
        resultantFlags++;
        minPeak = peaks[j];
      }
    }

    totalFlagsUsed = Math.max(totalFlagsUsed, resultantFlags);
    if (totalFlagsUsed >= flags) {
      break;
    }
  }

  return totalFlagsUsed;
}
// console.log(solution([0, 0, 0, 0, 0, 1, 0, 1, 0, 1]));
// console.log(solution([7, 10, 4, 5, 7, 4, 6, 1, 4, 3, 3, 7]));
console.log(solution([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]));
