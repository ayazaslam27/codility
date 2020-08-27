function solution(N, A) {
  let counter = new Array(N).fill(0);

  let maxCounter = 0;
  let temp = 0;
  for (const item of A) {
    if (item <= N) {
      counter[item - 1] = counter[item - 1] + 1;
      temp = Math.max(temp, counter[item - 1]);
    } else {
      maxCounter = Math.max(maxCounter, temp);
      if (maxCounter == 0) {
        continue;
      }
      for (let index = 0; index < counter.length; index++) {
        counter[index] = maxCounter;
      }
    }
  }

  return counter;
}

console.log(solution(1, [2, 1, 1, 2, 1]));
//console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
