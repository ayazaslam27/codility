function solution(A) {
  A = A.sort((a, b) => a - b);
  let disctinctArray = [];

  let lastItem = Infinity;
  for (const item of A) {
    if (lastItem !== item) {
      lastItem = item;
      disctinctArray.push(item);
    }
  }

  return disctinctArray.length;
}

console.log(solution([2, 1, 1, 2, 3, 1]));
