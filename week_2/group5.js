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