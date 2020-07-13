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