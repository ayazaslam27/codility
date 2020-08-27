function solution(A) {
  if (A.length < 1) return 0;

  let profit = 0;

  let minimumPurchase = 200000;
  profit = 0;
  for (const transaction of A) {
    minimumPurchase = Math.min(minimumPurchase, transaction);
    profit = Math.max(profit, transaction - minimumPurchase);
  }

  return profit;
}

console.log(solution([3, 4, 5, 2, 1, 4, 7]));
console.log(solution([23171, 21011, 21123, 21366, 21013, 21367]));
