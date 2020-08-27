// Given a string, representing domino tiles chain.Each tile has L - R format,
// where L and R are numbers from 1..6 range.Tiles are separated by the comma.
// Some examples of valid S chain are:
// 1. 1-4,4-2,3-1
// 2. 6-3
// 3. 4-3,5-1,2-2,1-3,4-4
// Devise a function that, give  a domino string, returns the number of tiles in the
// longest matching group within S. A matching group is a set of tiles that match and that
// are subsequent in S. Domino tiles match, if the right side of a tile is the same as the left
// side of the following tile. 2 - 4, 4 - 1 are matching tiles, but 5 - 2, 1 - 6 are not.
// domino("1-1,3-5,5-2,2-3,2-4") should return 3.

function domino(s) {
  var array = s.split(',');
  if (array.length == 0) return 0;
  var length = 0;
  var currentLength = 1;
  var lastRight = 0;
  for (const tile of array) {
    var da = tile.split('-');
    var left = da[0];
    var right = da[1];
    if (left == lastRight) {
      currentLength++;
    } else {
      // length = Math.max(length, currentLength);
      currentLength = 1;
    }
    lastRight = right;
    length = Math.max(length, currentLength);
  }

  return length;
}

// console.log(domino('1-1')); // 1
// console.log(domino('1-2,1-2')); // 1
console.log(domino('3-2,2-1,1-4,4-4,5-4,4-2,2-1')); // 4
console.log(domino('5-5,5-5,4-4,5-5,5-5,5-5,5-5,5-5,5-5,5-5')); // 7
