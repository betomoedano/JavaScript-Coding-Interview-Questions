function getNthFib(n) {
  if (n === 1) return 0;
  let a = 0;
  let b = 1;
  for (let i = 2; i < n - 1; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return a + b;
}
