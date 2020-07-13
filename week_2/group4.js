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