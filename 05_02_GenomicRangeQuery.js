function genomicRangeQuery(S, P, Q) {
  let array = [];
  for (let i = 0; i < P.length; i++) {
    dna = S.slice(P[i], Q[i] + 1);

    if (dna.indexOf("A") !== -1) {
      array.push(1);
    } else if (dna.indexOf("C") !== -1) {
      array.push(2);
    } else if (dna.indexOf("G") !== -1) {
      array.push(3);
    } else {
      array.push(4);
    }
  }
  return array;
}

console.log(genomicRangeQuery("CAGCCTA", [2, 5, 0], [4, 5, 6]));
