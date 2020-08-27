const CountDiv = (A, B, K) => {
  var offset = A % K === 0 ? 1 : 0;
  return parseInt(B / K) - parseInt(A / K) + offset;
};

console.log(CountDiv(0, 1, 11));
console.log(CountDiv(11, 345, 17));
console.log(CountDiv(10, 10, 5));
