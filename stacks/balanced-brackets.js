//BALANCED BRACKETS
// time O(n)
// space O(n)
function balancedBrackets(string) {
    const openingBrackets = "([{";
    const stack = [];
  
    for (const char of string) {
      if (openingBrackets.includes(char)) {
        stack.push(char);
      } else if (char === ")" || char === "]" || char === "}") {
        const posibleBalanced = stack.pop();
        if (posibleBalanced === "(" && char === ")") continue;
        if (posibleBalanced === "[" && char === "]") continue;
        if (posibleBalanced === "{" && char === "}") continue;
        return false;
      }
    }
    if (stack.length > 0) return false;
    return true;
  }
  
  const string = "([])(){}(())()()";
  // const string = "()[]{}{";
  
  console.log(balancedBrackets(string));