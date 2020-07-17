function frequencyTable(arr){
    var freqObj = {}
    for (var i = 0; i < arr.length; i++){
        if (freqObj.hasOwnProperty(arr[i])){
            freqObj[arr[i]] += 1
        } else {
            freqObj[arr[i]] = 1
        }
    }

    return freqObj
}

function reverseWordOrder(string){
    var arr = string.split(' ');
    var newString = ''
    for (var i = arr.length - 1; i > 0; i--) {
        newString += arr[i] + ' '
    }
    newString += arr[i]
    return newString
}


function dedupeString(string){
    var distinct = ""
    var seen = {}
    for (const char of str) {
        if (!seen[char]){
            distinct += char;
        }
        seen[char] = true;
    }
    return distinct;
}

function reverseWord(wordsStr) {
    // var words = wordsStr.split(" ");
    var wordsReversed = "";

    for (var word of words) {
      var reversedWord = "";

      for (var i = word.length - 1; i >= 0; --i) {
        reversedWord += word[i];
      }

      // add a space in front of word if it's not the first word
      if (wordsReversed.length > 0) {
        reversedWord = " " + reversedWord;
      }
      wordsReversed += reversedWord;
    }
    return wordsReversed;
  }


  function encode(str) {
    const charFreq = {};
    let encoded = "";

    for (const char of str) {
      if (charFreq[char]) {
        charFreq[char]++;
      } else {
        charFreq[char] = 1;
      }
    }

    for (const char of str) {
      if (charFreq[char]) {
        encoded += char + charFreq[char];
        charFreq[char] = 0;
      }
    }
    if(encoded.length < string.length){
        return encoded
    }
    else{
        return string
    }
  }

function strDecode(str) {
    let decoded = "";

    for (let i = 0; i < str.length; i++) {
      let n = parseInt(str[i]);

      if (n) {
        decoded += str[i - 1].repeat(n);
      }
    }
    return decoded;
}

function rotateString(str, n) {
  let res = "";
  let rotatedSubStr = "";

  for (let i = 0; i < str.length; i++) {
    if (i >= str.length - n) {
      rotatedSubStr += str[i];
    } else {
      res += str[i];
    }
  }
  return rotatedSubStr + res;
}


function updateInventory(newInv, currInv) {
  for (let i = 0; i < newInv.length; i++) {
    let itemFound = false;
    const newItem = newInv[i];

    for (let j = 0; j < currInv.length; ++j) {
      const currItem = currInv[j];

      if (newItem.name === currItem.name) {
        itemFound = true;
        currItem.quantity += newItem.quantity;
        break;
      }
    }
    if (itemFound === false) {
      currInv.push(newItem);
    }
  }
  return currInv;
}


