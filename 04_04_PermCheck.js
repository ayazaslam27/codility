function solution(A) {
  let map = {};
  for (let index = 0; index < A.length; index++) {
    const element = A[index];
    map[element] = false;
  }

  for (let index = 1; index <= A.length; index++) {
    if (map[index] === undefined) {
      return 0;
    }
  }

  return 1;
}

console.log(solution([2, 2, 2]));
console.log(solution([1, 4, 1]));
console.log(solution([1, 4, 3, 2]));
console.log(solution([4, 1, 3]));
console.log(solution([3]));
