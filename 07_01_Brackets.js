function solution(S) {
  let stack = [];

  for (const item of S) {
    if (item === '(' || item === '{' || item === '[') {
      stack.push(item);
    } else {
      let lastItem = stack.pop();
      if (!checkLastItem(item, lastItem)) {
        return 0;
      }
    }
  }

  return stack.length === 0 ? 1 : 0;
}

const checkLastItem = (item, lastItem) => {
  if (lastItem === '(' && item === ')') return true;
  if (lastItem === '{' && item === '}') return true;
  if (lastItem === '[' && item === ']') return true;

  return false;
};

console.log(solution(''));
