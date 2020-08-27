if (A.length <= 1) {
  return A.length;
}

A = A.map((a) => Math.abs(a));

let hsah = {};

for (let i = 0; i < A.length; i++) {
  hsah[A[i]] = 1;
}

let count = Object.keys(hsah).length;

return count;
