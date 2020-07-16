/*
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)
  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not
    Python: dict.has_key(key)
*/
function frequencyTable(arr){
    var freqObj = {}
    for (var i = 0; i < arr.length; i++){
        if (freqObj.hasOwnProperty(arr[i])){
            fareqObj[rr[i]] += 1
        } else {
            freqObj[arr[i]] = 1
        }
    }

    return freqObj
}
    // if (freqObj[arr[i] === undefined]) {
    //   freqObj[arr[i]] = 1;
    // } else {
    //   freqObj[arr[i]]++
    // }


}

// EX. ['A','A','B','C','C','C','D','D'] => {"A":2, "B":1, "C":3, "D":2}
// EX. ['A','C','C','C','D','D','A','B',] => {"A":2, "B":1, "C":3, "D":2}
/*
  Reverse Word Order
  Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence.
*/
function reverseWordOrder(string){
    var wordArr = string.split(' ')
    var revArr = []
    for(var i = wordArr.length - 1; i >= 0; i--){
        revArr.push(wordArr[i])
    }
    return revArr.join(' ')
}


function reverseWordOrder(string) {
  var splitter = string.split(' ')
  var newStr = [];
  for (var i = splitter.length - 1; i >= 0; i--) {
    newStr.push(splitter[i])
  }
  return newStr.join(' ')
}
// CLOSING ROOMS SOON

reverseWordOrder(['This', 'is', 'a', 'test'])
// EX. "THIS IS A TEST" => "TEST A IS THIS"
// ['This is a test']
// ['test', 'a', 'is', 'This' ]

/*
  String: Dedupe
  Remove duplicate characters
    - (case-sensitive)
  Bonus: Keep only the last instance of each character.
*/
function dedupeString(string){
  var singString = ''
  var stringObj = {}
  for (var i = 0; i < string.length; i++){
    stringObj[string[i]] = 1
    }
    for(key in stringObj){
      singString +=key
    }
  return singString
}


function dedupeString(string) {
  var split = ''
  var obj = {}
  for (var i = 0; i < string.length; i++) {
    obj[string[i]]++
  }
  for (key in obj) {
    split += key
  }
  return split
}
dedupeString('aabacecbedd') // => abced

console.log("tacocat")



function dedupeString(string) {
  var arr = []
  for (var i = 0; i < string.length; i++) {
    arr[string[i]]++
  }
  return arr
}
dedupeString('aabacecbedd') // => abced

// EX. "aabacedcbed" => "abced"
// EX. "bbbbaaaaffff" => "baf"
/*
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/
function reverseWord(string){
  var words = string.split(' ')
  var revWord = ''
  for(var i = 0; i < words.length; i++){
    for(var j = words[i].length -1; j >= 0; j--){
      revWord += words[j]
    }
  }
}


function reverseArr(arr) {
  for (var x = 0; x < (arr.length-1) / 2; x++) {
      var temp = arr[x]
      arr[x] = arr[arr.length-1-x]
      arr[arr.length-1-x] = temp
  }
  return arr
}

var output = reverseArr([1, 2, 3, 4, 5, 6, 7]);
console.log("Expected:[7,6,5,4,3,2,1]", output)

function reverseWord(string) {
  var newStr = ''
  for (var i = 0;i < string.length; i++) {
    newStr += string[string.length - 1 - i]
  }
  for (var j = 0; j < string.length -1 / 2; j++) {
    var temp = newStr[j]
    newStr[j] = newStr[newStr.length -1 -j]
    newStr[newStr.length -1 - j] = temp
  }
  console.log(newStr)
}
reverseWord('hello world')
// EX. "HELLO" => "OLLEH"
// EX. "hello world" => "olleh dlrow"
// EX. "abc def ghi" => "cba fed ihg"


function reverseWord(string){
  var revString = ''
  var fwdStrArr = []
  for(var i = string.length-1; i >= 0; i--){
    revString += string[i]
  }
  var revStrArr = revString.split(' ')
  for (var j = revStrArr.length-1; j >=0; j--){
    fwdStrArr.push(revStrArr[j])
  }
  return fwdStrArr.join(' ')
}

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



function encode(string){
  var encodeStr = ''
  var freqObj = {}
  for(var i = 0; i < string.length; i++){
    if (freqObj.hasOwnProperty(string[i])){
      freqObj[string[i]] += 1
    } else {
      freqObj[string[i]] = 1
    }
  }
  for(key in freqObj){
    encodeStr += key + freqObj[key]
  }
  return encodeStr
}

function encode(string){
  var codeStr = ''
  var count = 0
  for(var i = 0; i < string.length; i++){
    if(string[i + 1] == string[i]){
      count++
    }
  }
  return codeStr
}


function decode(string){
  var decodeStr = ''
  for(var i = 0; i < string.length; i++){
    if(isNaN(string[i])){
      continue
    } else {
      var stringInt = parseInt(string[i])
      for(var j = 0; j < stringInt; j++){
        decodeStr += string[i-1]
      }
    }
  }
  return decodeStr
}

decode('a3b2c1d3')

function decode(str) {
  var newStr = ''
  var strObj = {}
  for (var i = 0; i < str.length; i++) {
    if(isNaN(str[i])){
      strObj[str[i]] = 1
    } else {
      strObj[str[i-1]] = parseInt(str[i])
    }
  }
  for(key in strObj){
    for(var j = 0; j < strObj[key]; j++){
      newStr += key
    }
  }
  return newStr
}

decode('a3b2c1d3')
// HINT. YOU'RE GOING TO USE parseInt() function and isNan()
// EX. "a3b2c1d3" => "aaabbcddd"

// EX. "a3b2c1b2d3" => "aaabbcbbddd"

/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the right by that given integer amount.
*/
Bryan
function rotateString(string, num){
  var rotStr = ''
  for(var i = num; i >= 1; i-- ) {
    rotStr += string[string.length-i]
  }
  return rotStr + string.slice(0, string.length-num)
}

function rotateString(string, num){
  var rotStr = ''
  var stringLess = ''
  for(var i = num; i >=1 ; i-- ){
    rotStr += string[string.length-i]
  }
  for (var j = 0; j < string.length-num; j++){
    stringLess += string[j]
  }
  return rotStr + stringLess
}


Phillip
function rotateString(string, num){
  var popStr = ''
  var sameStr = ''
  for(var i = 0; i < string.length; i++ ){
    if (i <= string.length-1 - num ){
      sameStr += string[i]
      }
    else
      popStr += string[i]
  }
  return popStr + sameStr
}
console.log(rotateString('Hello', 2))

// EX. "HELLO WORLD", 1 => "DHELLO WORL"
// EX. "HELLO WORLD", 2 => "LDHELLO WOR"