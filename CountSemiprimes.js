function solution(N, P, Q) {
  let primes = getPrimes(N);

  let semiPrimes = new Array(N + 1).fill(0);

  for (let i = 0; i < primes.length; i++) {
    const prime1 = primes[i];

    for (let j = 0; j < primes.length; j++) {
      const prime2 = primes[j];

      let semiPrime = prime1 * prime2;

      if (semiPrime <= N) semiPrimes[semiPrime] = 1;
    }
  }

  let prefixSum = new Array(N + 1).fill(0);
  for (let i = 1; i < semiPrimes.length; i++) {
    prefixSum[i] = semiPrimes[i] + prefixSum[i - 1];
  }

  let results = [];
  for (let i = 0; i < P.length; i++) {
    let result = prefixSum[Q[i]] - prefixSum[P[i] - 1];
    results.push(result);
  }

  return results;
}

function getPrimes(N) {
  let array = new Array(Math.ceil(N / 2) + 1).fill(true);

  array[0] = false;
  array[1] = false;

  let i = 2;
  while (i * i <= N) {
    if (array[i]) {
      let k = i * i;
      while (k <= N) {
        array[k] = false;
        k = k + i;
      }
    }
    i++;
  }

  let primes = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      primes.push(i);
    }
  }

  return primes;
}
console.log(solution(3, [1], [3]));
