const test =
  "anulalalunapaisajemontanaguaamoraromacomidaluzazulsillagatobotellacamarayosoypalindromocasaverdebanderaventanacangrejolarutanosaportootropasonaturaliniciaracaestoseralodoodolaresdonasbarcosmarcieloaviontierrapaisbicicletaestonoespalindromojugarseverlasalrevesusandounradarenelojorejero";
// const test = "anulalaluna";

function getPalindromes(string) {
  const result = [];

  for (let i = 0; i < string.length; i++) {
    for (let j = 1; j < string.length; j++) {
      // because if not equal, it's not a palindrome
      if (string[i] === string[j]) {
        const stringToCheck = string.substring(i, j + 1);
        if (stringToCheck.length > 3 && isPalindrome(stringToCheck)) {
          result.push(stringToCheck);
        }
      }
    }
  }
  return {
    result: result,
    items: result.length,
  };
}

function isPalindrome(string) {
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(getPalindromes(test));
