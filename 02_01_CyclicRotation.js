function solution(A, K) {
  let rotation = K % A.length;

  let slice1 = A.slice(A.length - rotation, A.length);
  let slice2 = A.slice(0, A.length - rotation);

  let result = [...slice1, ...slice2];

  return result;
}

console.log(solution([3, 8, 9, 7, 6], 3));
