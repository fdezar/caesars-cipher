function rot13(str) {
    let cipher = "";
  
    for (let i = 0; i < str.length; i++) {
      let charNum = str[i].charCodeAt();
      if (charNum >= 65 && charNum <= 77) {
        cipher += String.fromCharCode(charNum + 13);
      } else if (charNum >= 78 && charNum <= 90) {
        cipher += String.fromCharCode(charNum - 13);
      } else {
        cipher += str[i];
      }
    }
    return cipher.toUpperCase();
  }
  
  rot13("SERR PBQR PNZC");