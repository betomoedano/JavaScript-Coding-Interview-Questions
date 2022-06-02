/////////////////////////////////////////////////////////
// PHONE NUMBER MNEMONICS
// O(4^n * n) time | O(4^n * n) space
// where n is the length of the phone number

const DIGIT_LETTERS = {
    0: ["0"],
    1: ["1"],
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"]
  };
  
  function phoneNumberMnemonics(phoneNumber) {
    const currentMnemonic = new Array(phoneNumber.length).fill("0");
    const mnemonicsFound = [];
  
    phoneNumberMnemonicsHelper(0, phoneNumber, currentMnemonic, mnemonicsFound);
  
    return mnemonicsFound;
  }
  
  function phoneNumberMnemonicsHelper(
    idx,
    phoneNumber,
    currentMnemonic,
    mnemonicsFound
  ) {
    if (idx === phoneNumber.length) {
      const mnemonic = currentMnemonic.join("");
      mnemonicsFound.push(mnemonic);
    } else {
      const digit = phoneNumber[idx];
      const letters = DIGIT_LETTERS[digit];
      for (const letter of letters) {
        currentMnemonic[idx] = letter;
        phoneNumberMnemonicsHelper(
          idx + 1,
          phoneNumber,
          currentMnemonic,
          mnemonicsFound
        );
      }
    }
  }
  
  console.log(phoneNumberMnemonics("9"));