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
  return arr.reduce((result, item) => {
    let isInResult = result.hasOwnProperty(item);
    result[item] = (isInResult) ? result[item] + 1 : 1;
    return result;
  }, {});
}
// EX. ['A','A','B','C','C','C','D','D'] => {"A":2, "B":1, "C":3, "D":2}
// EX. ['A','C','C','C','D','D','A','B',] => {"A":2, "B":1, "C":3, "D":2}
/*
  Reverse Word Order
  Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence.
*/
function reverseWordOrder(string){
  var strArr = string.split(' ');
  var newStr = (strArr.length > 0) ? strArr[strArr.length - 1] : '';
  for (let i = strArr.length - 2; i >= 0; i--) {
      newStr += ` ${strArr[i]}`;
  }
  return newStr;
}
// EX. "THIS IS A TEST" => "TEST A IS THIS"



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
    var newobj = {};
    for  (var i = 0; i < arr.length; i++) {
        if (arr[i] in newobj) {
            newobj[arr[i]] += 1;
        } else {
            newobj[arr[i]] = 1;
        }
    }
    return newobj;
}


// EX. ['A','A','B','C','C','C','D','D'] => {"A":2, "B":1, "C":3, "D":2}
// EX. ['A','C','C','C','D','D','A','B',] => {"A":2, "B":1, "C":3, "D":2}
/*
  Reverse Word Order
  Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence.
*/
// CLOSING ROOMS SOON

function reverseWordOrder(string){
    var newStr = '';
    var word = string.split(" ");
    for (var i = word.length - 1; i > 0 ; i--){
        newStr += (word[i] + ' ');
    }
    if (word.length > 0){
      newStr += word[0]
    }
    return newStr;
}


// EX. "THIS IS A TEST" => "TEST A IS THIS"

/*
  String: Dedupe
  Remove duplicate characters
    - (case-sensitive)
  Bonus: Keep only the last instance of each character.
*/
function dedupeString(string){
  let chars = {}; // Use object to find unique chars
  let newStr = ''; // String to return
  for (let i = 0; i < string.length; i++) {
    chars[string[i]] = i; // each char will only be in object once, add dummy value
  }
  for (let key in chars) {
    newStr += key; // add chars found in order to string
  }
  return newStr;
}

// Bonus attempt, only keeping last instance of chars
function dedupeString2(string){
  const chars = {};
  let newStr = '';
  // Same basic logic but this time loop backwards
  for (let i = string.length-1; i >= 0; i--) {
    chars[string[i]] = i;
  }
  const charKeys = Object.keys(chars); // get the keys (still in reverse order)
  for (let i = charKeys.length-1; i >= 0; i--) {
    newStr += charKeys[i]; // Loop backwards through key array to put them in correct order
  }
  return newStr;
}

/*
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/
function reverseWord(string){
  let newStr = '';
  for(let i = 0; i < string.length; i++) {
    // Instead of split find spaces and skip them
    if (string[i] != ' ') {
      let start = i;
      while (string[i+1] != ' ' && i < string.length) {
        i++; // while in a word keep iterating
      }
      // Go back throuhg indices to put word in reverse order
      for (let j = i; j >= start; j--) {
        if (j != string.length) {
          newStr += string[j];
        }
      }
    } else {
      // Just add a if between words
      newStr += ' ';
    }
  }
  return newStr;
}

/*
  String: Dedupe
  Remove duplicate characters
    - (case-sensitive)
  Bonus: Keep only the last instance of each character.
*/
function dedupeString(string){

}
// EX. "aabacedcbed" => "abced"
// EX. "bbbbaaaaffff" => "baf"
/*
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/
function reverseWord(string){

}
// EX. "HELLO" => "OLLEH"
// EX. "hello world" => "olleh dlrow"
// EX. "abc def ghi" => "cba fed ihg"




/*
String: Dedupe
Remove duplicate characters
  - (case-sensitive)
Bonus: Keep only the last instance of each character.
*/
function dedupeString(string){

}

dedupeString()
// EX. "aabacecbedd" => "abced"
// EX. "bbbbaaaaffff" => "baf"
/*
Given a string containing space separated words
Reverse each word in the string.
If you need to, use .split to start, then try to do it without.
*/
function reverseWord(string){
  var split = string.split("");
  var reverse = split.reverse();
  var join = reverse.join("");
  return join;
}
// EX. "HELLO" => "OLLEH"
// EX. "hello world" => "olleh dlrow"
// EX. "abc def ghi" => "cba fed ihg"
// EX. "THIS IS A TEST" => "SIHT SI A TSET"




function dedupeString(string){
  var newArr = string.split('');
  var newStr = " ";
  for(var i = 0; i < newArr.length; i++) {
    if (!(newArr[i] in newStr)) {
      newStr += newArr[i];
    }
  }
  return newStr;
}


dedupeString("aabacecbedd")
// EX. "aabacecbedd" => "abced"
// EX. "bbbbaaaaffff" => "baf"
/*
Given a string containing space separated words
Reverse each word in the string.
If you need to, use .split to start, then try to do it without.
*/

//bev: doesn't work lol...
// ok, ty!

function reverseWord(string){
  var newArr = string.split('');
  var newStr = " ";
  for(var i = newArr.length - 1; i <= 0; i--) {

    newStr += newArr[i];
  }
  return newStr;
}

reverseWord('OLLEH');
reverseWord('olleh dlrow');
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
function encode(string){
  var newStr = '';
  for (var i = 0; i < string.length; i++) {
    var count = 0;
    var char = string[i];
    while (string[i] == char) {
      i++;
      count++;
    }
    newStr += `${char}${count}`;
  }
  return (newStr.length < string.length) ? newStr : string;
}
// EX. "aaaabbcddd" => "a4b2c1d3"
// EX. "" => ""
// EX. "bbcc" => "bbcc"

function decode(string){
  var newStr = '';
  for (var i = 0; i < string.length; i++) {
    var times = parseInt(string[i+1]);
    if (times) {
      for (var j = 0; j < times; j++) {
        newStr += string[i];
      }
      i++;
    } else {
      newStr += string[i];
    }
  }
  return newStr;
}
// HINT. YOU'RE GOING TO USE parseInt() function OR isNaN()
// EX. "a3b2c1d3" => "aaabbcddd"

/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the right by that given integer amount.
*/

function rotateString(string, n){

}
// EX. "HELLO WORLD", 1 => "DHELLO WORL"
// EX. "HELLO WORLD", 2 => "LDHELLO WOR"