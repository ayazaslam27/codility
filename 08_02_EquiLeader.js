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

  let leader = stack.pop();
  let count = 0;

  for (let index = 0; index < A.length; index++) {
    if (A[index] === leader) {
      count = count + 1;
    }
  }

  if (count <= A.length / 2) {
    return 0;
  }

  let leaderCount = 0;
  let equiLeaders = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] == leader) {
      leaderCount++;
    }
    let leadersInRightPart = count - leaderCount;

    //because occurs in more than half of the length
    let leftRange = (i + 1) / 2;
    let rightRange = (A.length - i - 1) / 2;
    if (leaderCount > leftRange && leadersInRightPart > rightRange) {
      equiLeaders++;
    }
  }

  return equiLeaders;
}

console.log(solution([4, 3, 4, 4, 4, 2]));
