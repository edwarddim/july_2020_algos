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