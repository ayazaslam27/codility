function solution(H) {
  let stack = [];
  stack.push(H[0]);

  let count = 1;

  for (let i = 1; i < H.length; i++) {
    let currentHeight = H[i];
    if (currentHeight === stack[stack.length - 1]) {
      continue;
    } else if (currentHeight > stack[stack.length - 1]) {
      stack.push(currentHeight);
      count++;
    } else if (currentHeight < stack[stack.length - 1]) {
      while (stack.length > 0 && currentHeight < stack[stack.length - 1]) {
        stack.pop();
      }

      if (stack.length !== 0 && currentHeight === stack[stack.length - 1]) {
        continue;
      }

      stack.push(currentHeight);
      count++;
    }
  }

  return count;
}

console.log(solution([8, 8, 5, 7, 9, 8, 7, 4, 8]));
