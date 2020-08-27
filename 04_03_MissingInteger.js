function solution(A) {
  let array = A.filter((x) => x > 0);

  if (array.length === 0) return 1;

  let maxValue = Math.max(...array);
  maxValue = maxValue === -1 ? 0 : maxValue;

  let map = {};
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    map[element] = false;
  }

  for (let index = 1; index <= maxValue; index++) {
    if (map[index] === undefined) {
      return index;
    }
  }

  return maxValue + 1;
}

// console.log(solution([1, 2, 3]));
// console.log(solution([-1, -2]));
// console.log(solution([-1, -2, 1, 3]));
console.log(solution([1, 3, 6, 4, 1, 2]));
