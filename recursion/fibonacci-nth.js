function getNthFib(n, dic = { 1: 0, 2: 1 }) {
  if (n in dic) return dic[n];
  dic[n] = getNthFib(n - 1, dic) + getNthFib(n - 2, dic);
  return dic[n];
}
