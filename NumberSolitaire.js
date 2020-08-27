function solution(A) {
  var dp = new Array(A.length);

  dp[0] = A[0];

  for (var i = 1; i < A.length; i++) {
    var max = dp[i - 1] + A[i];

    for (var j = 1; j <= 6; j++) {
      if (i - j >= 0) {
        max = Math.max(dp[i - j] + A[i], max);
      }
    }

    dp[i] = max;
  }

  return dp[A.length - 1];
}

console.log(solution([0, -4, -5, -2, -7, -9, -3, -10]));
