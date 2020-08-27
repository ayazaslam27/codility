function solution(A) {
  let tupples = [];
  for (i = 0; i < A.length; i++) {
    tupples.push([i - A[i], i + A[i]]);
  }

  tupples.sort((a, b) => a[0] - b[0]);
  //[ [ -4, 6 ], [ -1, 1 ], [ 0, 4 ], [ 0, 8 ], [ 2, 4 ], [ 5, 5 ] ]
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      let startOfCurrentDisc = tupples[j][0];
      let endOfDisc = tupples[i][1];

      if (startOfCurrentDisc <= endOfDisc) {
        count++;
        if (count > 10000000) return -1;
      } else {
        break;
      }
    }
  }

  return count;
}

console.log(solution([1, 5, 2, 1, 4, 0]));
