function solution(X, Y, D) {
  let remainingDistance = Y - X;

  let numberOfSteps = Math.floor(remainingDistance / D);
  let coveredDistance = numberOfSteps * D + X;
  if (X !== Y && coveredDistance < Y) {
    numberOfSteps = numberOfSteps + 1;
  }

  return numberOfSteps;
}

console.log(solution(10, 85, 30));
