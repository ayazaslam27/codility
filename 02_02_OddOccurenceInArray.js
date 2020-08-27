function solution(A) {
  let sortedArray = A.sort((a, b) => a - b);

  for (let i = 0; i < sortedArray.length; i = i + 2) {
    if (sortedArray[i] !== sortedArray[i + 1]) {
      return sortedArray[i];
    }
  }
}

console.log(solution([9, 3, 9, 3, 9, 10, 9]));
