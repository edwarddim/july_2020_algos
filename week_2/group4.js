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
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(arr[i])) {
            obj[arr[i]] += 1;
        } else {
            obj[arr[i]] = 1;
        }
    }
    return obj
}

console.log(frequencyTable(['A','A','B','C','C','C','D','D']))
// EX. ['A','A','B','C','C','C','D','D'] => {"A":2, "B":1, "C":3, "D":2}
// EX. ['A','C','C','C','D','D','A','B',] => {"A":2, "B":1, "C":3, "D":2}
/*
Reverse Word Order
Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence.
*/
function reverseWordOrder(string){
    var arr = string.split(' ');
    newString = ''
    for (var i = arr.length - 1; i >= 1; i--) {
        newString += arr[i] + ' '
    }
    newString += arr[0]
    return newString
}
// CLOSING ROOMS SOON

console.log(reverseWordOrder("THIS IS A TEST"));
// EX. "THIS IS A TEST" => "TEST A IS THIS"
//THIS, YOU SEE, IS A TEST!
function reverseWordOrder(string){
    newStr = ''
    var arr = string.split(' ');
    console.log(arr);
    arr.reverse()
    console.log(arr)
    newStr = arr.join(" ")
    console.log(newStr);
}

reverseWordOrder("This is a Test")

/*
  String: Dedupe
  Remove duplicate characters
    - (case-sensitive)
  Bonus: Keep only the last instance of each character.
*/
function dedupeString(string){
    newString = ''
    charObj = {}
    for (var i = 1; i < string.length; i++) {
        if (charObj[string[i]] in charObj) {
            charObj[string[i]] += 1
        } else {
            charObj[string[i]] = 1
        }
    }
    console.log(charObj)
    for (key in charObj) {
        newString += key
    }
    return newString
}



console.log(dedupeString("aabacecbedd"))
// EX. "aabacecbedd" => "abced"
// EX. "bbbbaaaaffff" => "baf"
// sheep
/*
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/
function reverseWord(string){
    var arr = string.split(' ')

    for (str in arr) {
        var charArr = []
        for (var i = 0; i < str.length; i++) {
            charArr.push(str[i])
        }
        }
    }

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
    obj = {};
    for (let i = 0; i < string.length; i++) {
        if (string[i] in obj) {
        obj[string[i]] += 1
        } else {
        obj[string[i]] = 1
        }
    }
    var encodedString = '';
    for (key in obj) {
        if (obj[key] == 2) {
            encodedString += key + key
        } else {
            encodedString += key + obj[key]
        }
    }
    return encodedString;
}
// EX. "aaaabbcddd" => "a4b2c1d3"
// EX. "" => ""
// EX. "bbcc" => "bbcc"

function decode(string){
    var decodedString = '';
    for (var i = 0; i < string.length; i++) {
        if (isNaN(string[i])) {
            decodedString += string[i]
        } else {
            var temp = parseInt[string[i]]
            temp--
            if (temp > 0) {
                i--
            } else {
                continue
            }
        }
    }
    console.log(decodedString);
}


// HINT. YOU'RE GOING TO USE parseInt() function and isNan()
// EX. "a3b2c1d3" => "aaabbcddd"

function decode(string) {
    charObj = {};
    for (let i = 0; i < string.length; i+=2) {
        charObj[string[i]] = parseInt(string[i + 1])
    }
    console.log(charObj);
    decodedString = '';
    for (key in charObj) {
        for (let i = charObj[key]; i > 0; i--) {
        decodedString += key
        }
    }
    return decodedString;
}


/*
  String: Rotate String
  Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the right by that given integer amount.
*/

function rotateString(string, n){

}
// EX. "HELLO WORLD", 1 => "DHELLO WORL"
// EX. "HELLO WORLD", 2 => "LDHELLO WOR"

//BEV:
function updateInv(newInv, currInv){
    for (var i = 0; i < currInv.length; i++){
        for (var j = 0; j < newInv.length; j++){
            if (currInv[i].name == newInv[j].name) {
                newInv[j].quantity += currInv[i].quantity;
            }
        }
    }
    return newInv;
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

updateInv(test1NewInv, test1CurrInv);

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

// Working on a solution with only one for loop
function updateInv(newInv, currInv){
    for (var i = 0; i < newInv.length; i++) {
      var found = false;
      for (var j = 0; j < currInv.length; j++) {
        if (newInv[i].name == currInv[j].name) {
          found = true;
          currInv[j].quantity += newInv[i].quantity;
          break;
        }
      }
      if (!found) {
        currInv.push(newInv[i]);
      }
    }
    return currInv;
}

// An attempt at updating inventory with only one for loop
function updateInv2(newInv, currInv){
    // Create lookup hash to each item by name
    var newInvHash = newInv.reduce((obj, item) => {
      obj[item.name] = item;
      return obj;
    }, {});
    var currInvHash = currInv.reduce((obj, item) => {
      obj[item.name] = item;
      return obj;
    }, {});

    // Use keys in new inventory to update quantities in current inventory
    for (var [key, newItemObj] of Object.entries(newInvHash)) {
        if (currInvHash[key]) {
            // Item is in current inventory, add quantity
            currInvHash[key].quantity += newItemObj.quantity;
        } else {
            // Item is not in current inventory, push it in
            currInv.push(newItemObj);
        }
    }
    return currInv;
}

function firstNonRepeatingChar(string){
    var charCounts = {};
    for (var i = 0; i < string.length; i++) {
      if (charCounts[string[i]]) {
        charCounts[string[i]]++;
      } else {
        charCounts[string[i]] = 1;
      }
    }
    var index = 0
    for (var [key, val] of Object.entries(charCounts)) {
      if (val == 1) {
            string[string.indexOf(key)]
      }
    }
    return '';
}
"moonmsna"
