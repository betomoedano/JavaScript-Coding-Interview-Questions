// O(n^2) time | O(n) space - where n is the length of the stack
// solution using recursion

function sortStack(stack) {
    if (stack.length === 0) return stack;
  
    const top = stack.pop();
  
    sortStack(stack);
  
    insertInSortedOrder(stack, top);
  
    return stack;
  }
  
  function insertInSortedOrder(stack, value) {
    if (stack.length === 0 || stack[stack.length - 1] <= value) {
      stack.push(value);
      return;
    }
  
    const top = stack.pop();
  
    insertInSortedOrder(stack, value);
  
    stack.push(top);
  }
  
  const stack = [-5, 2, -2, 4, 3, 1];
  
  console.log(sortStack(stack));
  