function solution(A, B) {
  let count = A.length;
  let stackDownstreamFishes = [];

  for (var i = 0; i < A.length; i++) {
    if (B[i] === 1) {
      stackDownstreamFishes.push(A[i]);
    } else {
      // Going backward through all downstream fishes
      for (var j = stackDownstreamFishes.length - 1; j >= 0; j--) {
        var lastDownstreamFishSize = stackDownstreamFishes[j];
        if (lastDownstreamFishSize > A[i]) {
          count--;
          break;
        } else if (lastDownstreamFishSize < A[i]) {
          count--;
          stackDownstreamFishes.pop();
        }
      }
    }
  }
  return count;
}

console.log(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]));
