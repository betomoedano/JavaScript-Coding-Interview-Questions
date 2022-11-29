function isUnique(string) {
  if (string.length === 0) return string;
  const regex = / /g;
  return string.replace(regex, "%20");
}

const string = "Mr Jhon Smith ";
console.log(isUnique(string));
