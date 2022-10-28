// time O(n)
// space O(n)
function getNthFib(n, dic = { 1: 0, 2: 1 }) {
  if (n in dic) return dic[n];
  dic[n] = getNthFib(n - 1, dic) + getNthFib(n - 2, dic);
  return dic[n];
}

// time O(n)
// space O(1)
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
