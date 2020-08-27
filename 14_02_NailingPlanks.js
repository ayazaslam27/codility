function solution(A, B, C) {
  var begin = 0;
  var end = C.length - 1;
  var res = -1;
  while (begin <= end) {
    var mid = parseInt((begin + end) / 2);
    if (check(A, B, C, mid + 1)) {
      end = mid - 1;
      res = mid + 1;
    } else {
      begin = mid + 1;
    }
  }
  return res;
}

function check(a, b, c, mid) {
  var nailsPosition = new Array(2 * c.length + 1).fill(0);

  for (var i = 0; i < mid; ++i) {
    nailsPosition[c[i]] = 1;
  }

  for (i = 1; i < nailsPosition.length; ++i) {
    nailsPosition[i] = nailsPosition[i] + nailsPosition[i - 1];
  }

  for (i = 0; i < a.length; ++i) {
    if (nailsPosition[b[i]] <= nailsPosition[a[i] - 1]) {
      return false;
    }
  }
  return true;
}

console.log(solution([1, 4, 5, 8], [4, 5, 9, 10], [4, 6, 7, 10, 2]));
