const Nesting = (S) => {
  if (S.length % 2 !== 0) {
    return 0;
  }

  let stack = [];

  for (let index = 0; index < S.length; index++) {
    const element = S[index];

    if (IsOpener(element)) {
      stack.push(element);
    } else {
      if (stack.length === 0) {
        return 0;
      }

      var lastChar = stack.pop();

      if (!IsPairComplete(lastChar, element)) {
        return 0;
      }
    }
  }

  if (stack.length === 0) {
    return 1;
  }

  return 0;
};

const IsOpener = (char) => {
  if (char === '{' || char === '(' || char === '[') return true;

  return false;
};

const IsPairComplete = (startChar, endChar) => {
  if (startChar === '{' && endChar === '}') return true;

  if (startChar === '(' && endChar === ')') return true;

  if (startChar === '[' && endChar === ']') return true;

  return false;
};

console.log(Nesting('(()(())())')); //1
console.log(Nesting('())')); //0
console.log(Nesting('[]')); //1
console.log(Nesting(')(')); //0
console.log(Nesting('()()()[]{}')); //1
