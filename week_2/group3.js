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
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */
 function encode(string){

}
// EX. "aaaabbcddd" => "a4b2c1d3"
// EX. "" => ""
// EX. "bbcc" => "bbcc"

function decode(string){

}
// HINT. YOU'RE GOING TO USE parseInt() function and isNan()
// EX. "a3b2c1d3" => "aaabbcddd"

/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the right by that given integer amount.
*/

function rotateString(string, n){
  rotatedString = '';
  for (var i = string.length - n; i < string.length; i++) {
    rotatedString += string[i];
  }
  for (var i = 0; i < string.length - n; i++) {
    rotatedString += string[i];
  }
  console.log(rotatedString);
}


rotateString("HELLO WORLD", 2);
// EX. "HELLO WORLD", 1 => "DHELLO WORL"
// EX. "HELLO WORLD", 2 => "LDHELLO WOR"

// SECOND SOLUTION WITH ONLY ONE FOR LOOP!
function rotateString(string, n) {
  newString = '';
  secondString = '';
  for (var i = 0; i < string.length - n; i++) {
    if ((string.length - n + i) < string.length) {
      secondString += string[string.length - n + i]
    }
    newString += string[i]
  }
  secondString += newString
  console.log(secondString)
}




function rotateString(string, n) {
  newString = '';
  secondString = '';
  for (var i = 0; i < string.length - n; i++) {
    if ((string.length - n + i) < string.length) {
      secondString += string[string.length - n + i]
    }
    newString += string[i]
  }
  secondString += newString
  console.log(secondString)
}

print(rotateString("HELLO WORLD", 3))


function updateInv(newInv, currInv){
  
}

const test1NewInv = [
    { name: "Grain of Rice", quantity: 9000 },
    { name: "Peanut Butter", quantity: 50 },
    { name: "Royal Jelly", quantity: 20 },
  ];
const test1CurrInv = [
    { name: "Peanut Butter", quantity: 20 },
    { name: "Grain of Rice", quantity: 1 },
];
/* 
    Output: [
      { name: "Peanut Butter", quantity: 70 },
      { name: "Grain of Rice", quantity: 90001 },
      { name: "Royal Jelly", quantity: 20 },
    ]
*/

/*
    Given a string, return the first non-repeating character
    within string
    // EX. "STRESS" => "T"
    // EX. "MOONMEN" => "E"

*/
function firstNonRepeatingChar(string){

}