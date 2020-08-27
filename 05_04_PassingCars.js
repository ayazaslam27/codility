function solution(A) {
  let numberOfZeros = 0;
  let count = 0;
  for (const item of A) {
    if (item === 0) {
      numberOfZeros = numberOfZeros + 1;
    } else {
      count = count + numberOfZeros;
      if (count > 1000000000) {
        return -1;
      }
    }
  }

  return count;
}

console.log(solution([0, 1, 0, 1, 1]));
