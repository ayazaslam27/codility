function solution(M, A) {
  const LIMIT = 1000000000;
  let seen = Array(M + 1).fill(false);

  let leftEnd = 0;
  let rightEnd = 0;
  let numSlice = 0;

  while (leftEnd < A.length && rightEnd < A.length) {
    // case 1: distinct (rightEnd)
    if (seen[A[rightEnd]] == false) {
      // note: not just +1
      // there could be (rightEnd - leftEnd + 1) combinations (be careful)
      numSlice = numSlice + (rightEnd - leftEnd + 1);
      if (numSlice >= LIMIT) return LIMIT;

      // increase the slice to right by "1" (important)
      seen[A[rightEnd]] = true;
      rightEnd++;
    }
    // case 2: not distinct
    else {
      // decrease the slice from left by "1" (important)
      // remove A[leftEnd] from "seen" (be careful)
      seen[A[leftEnd]] = false;
      leftEnd++;
    }
  }

  return numSlice;
}

console.log(solution(6, [3, 4, 5, 5, 2]));
