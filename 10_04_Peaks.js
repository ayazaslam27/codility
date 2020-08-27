function solution(A) {
  if (A.length < 3) return 0;

  let peaks = [];

  for (let index = 1; index < A.length - 1; index++) {
    if (A[index] > A[index - 1] && A[index] > A[index + 1]) {
      peaks.push(index);
    }
  }

  for (let numBlocks = peaks.length; numBlocks >= 1; numBlocks--) {
    if (A.length % numBlocks !== 0) continue;

    let blockSize = A.length / numBlocks;
    let resultantBlocks = 0;

    for (let peak of peaks) {
      //Has to be contiguous blocks
      const upperBound = blockSize * (resultantBlocks + 1);
      const lowerBound = blockSize * resultantBlocks;

      if (peak >= lowerBound && peak < upperBound) {
        resultantBlocks++;
        if (resultantBlocks === numBlocks) return resultantBlocks;
      }
    }
  }

  return 0;
}
console.log(solution([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]));
