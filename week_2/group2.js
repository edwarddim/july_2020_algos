// MON
/*
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)
  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not
    Python: dict.has_key(key)
*/
function frequencyTable(arr){

}

function frequencyTable(arr){
    var dict = {}
    for (var i=0; i<arr.length; i++){
        if (dict.hasOwnProperty(arr[i]) === false){
            dict[arr[i]] = 1
        }
        else {
            dict[arr[i]]++
        }
    }
    return dict
}

function frequencyTable2(inputArray) {
  let freqTable = {};
  inputArray.forEach((element) => {
    if (freqTable[element]) {
      freqTable[element] += 1;
    } else {
      freqTable[element] = 1;
    }
  });
  console.log(freqTable);
  return freqTable;
}
// EX. ['A','A','B','C','C','C','D','D'] => {"A":2, "B":1, "C":3, "D":2}
// EX. ['A','C','C','C','D','D','A','B',] => {"A":2, "B":1, "C":3, "D":2}
/*
  Reverse Word Order
  Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence.
*/
// CLOSING ROOMS SOON

function reverseWordOrder(string){
    var strArr = string.split(" ")
    var newString = strArr[strArr.length-1]
    for (var i=strArr.length-2; i>=0; i--){
        newString += ` ${strArr[i]}`
    }
    return newString
}
// EX. "THIS IS A TEST" => "TEST A IS THIS"


/*
  String: Dedupe
  Remove duplicate characters
    - (case-sensitive)
  Bonus: Keep only the last instance of each character.
*/
function dedupeString1(string) {
  let letters = [];
  for (let letter of string) {
    if (!letters.includes(letter)) {
      letters.push(letter);
    }
  }
  console.log(letters.join(""));
  return letters.join("");
}

// EX. "aabacedcbed" => "abced"
// EX. "bbbbaaaaffff" => "baf"
/*
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

function reverseWord2(string) {
  let words = string.split(" ");
  let revWords = [];
  words.forEach((word) => {
    revWords.push(word.split("").reverse().join(""));
  });

  console.log(revWords.join(" "));
  return revWords.join(" ");
}
// EX. "HELLO" => "OLLEH"
// EX. "hello world" => "olleh dlrow"
// EX. "abc def ghi" => "cba fed ihg"

/*
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears.


  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */
 function encode(string) {
  let letterCount = {};
  let newStr = "";
  for (let letter of string) {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }
  for (let letterKey in letterCount) {
    newStr += `${letterKey}${letterCount[letterKey]}`;
  }
  if (newStr.length > string.length) {
    return string;
  }
  return newStr;
}

function encode(string){
  var letters = string.split("")
  var dict = {}
  var arr = []
  for (var letter of string){
      if (dict.hasOwnProperty(letter)){
          dict[letter] += 1
      }
      else {
          dict[letter] = 1
      }
  }
  for (var key in dict){
      arr.push(key)
      arr.push(`${dict[key]}`)
  }
  return arr.join("")
}

// EX. "aaaabbcddd" => "a4b2c1d3"
// EX. "" => ""
// EX. "bbcc" => "bbcc"

function decode(string) {
  let newStr = "";
  for (let character of string) {
    if (string.indexOf(character) % 2 == 1) {
      for (let i = 0; i < Number(character); i++) {
        newStr += string[string.indexOf(character) - 1];
      }
    }
  }
  console.log(newStr);
  return newStr
}
// shorter version
function decode2(string) {
  let newStr = "";
  for (let i = 1; i < string.length; i += 2) {
    for (let j = 0; j < Number(string[i]); j++) {
      newStr += string[i - 1];
    }
  }
  console.log(newStr);
  return newStr
}

function decode(string) {
  var strArr = string.split("")
  var newStr = ""
  for (var i=0; i<strArr.length; i++){
      newStr += strArr[i]
      for (var j=1; j<parseInt(strArr[i+1]); j++){
          newStr += strArr[i]
      }
      i++
  }
  return newStr
}

// HINT. YOU'RE GOING TO USE parseInt() function and isNan()
// EX. "a3b2c1d3" => "aaabbcddd"

/*
  String: Rotate String
  Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the right by that given integer amount.
*/

function rotateString(string, n){

}

function rotateString(string, n){
  var count = n % string.length
  var arr = string.split('')

  while (count>0){
    var arrVal = arr.pop()
    arr.unshift(arrVal)
    count--
  }
  return arr.join('')
}

console.log(rotateString("HELLO WORLD", 2))

// EX. "HELLO WORLD", 1 => "DHELLO WORL"
// EX. "HELLO WORLD", 2 => "LDHELLO WOR"

// TRY ACCOMPLISHING THIS WITH ONE FOR LOOP
// YOU'RE GOING TO NEED TWO STRING VARIABLES
function rotateString(string, n){
  n = n % string.length
  if (n == 0) {
    return string;
  }
  var newStr = '';
  for (var i = string.length-n; i < string.length; i++) {
    newStr += string[i];
  }
  for (var i = 0; i < string.length-n; i++) {
    newStr += string[i];
  }
  return newStr;
}

// Single for loop implementation
function rotateString(string, n){
  n = n % string.length
  if (n == 0) {
    return string;
  }
  var startStr = '';
  var endStr = '';
  for (var i = 0; i < string.length; i++) {
    if (i < string.length - n) {
      startStr += string[i];
    } else {
      endStr += string[i];
    }
  }
  return endStr + startStr;
}

function rotateString2(string, n) {
  let newStr = string.slice(string.length - n, string.length) + string;
  console.log(newStr.slice(0, newStr.length - n));
  return newStr.slice(0, newStr.length - n);
}
