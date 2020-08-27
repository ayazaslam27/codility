function solution(A) {
  let stack = [];

  if (A.length === 0) return -1;

  stack.push(A[0]);
  for (let i = 1; i < A.length; i++) {
    if (stack.length > 0 && A[i] !== stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(A[i]);
    }
  }

  let lastValue = stack.pop();
  let count = 0;

  for (let index = 0; index < A.length; index++) {
    if (A[index] === lastValue) {
      count = count + 1;
    }
  }

  if (count <= A.length / 2) {
    return -1;
  }

  return A.indexOf(lastValue);
}

console.log(solution([4, 6, 6, 6, 6, 8, 8]));
