/*
  Recursive Sigma
  Input: integer
  Output: sum of integers from 1 to Input integer
*/
function recursiveSigma(n) {
  if (n == 1) {
    return 1
  }
  return n + recursiveSigma(n - 1)
}
recursiveSigma(4)
/*
  Recursively sum an arr of ints
*/
// input was 5
// first time --->  5 + funct(4)

// second ---->  5 + 4 + funct(3)

// third ----> 5 + 4 + 3 + funct(2)

// fourth --->  5 + 4 + 3 + 2 + funct(1)
//  fith ---> 5 + 4 + 3 + 2 + 1


function sumArr(arr, i = 0) {
  if (i == arr.length -1){
    return arr[i]
  }
  return arr[i] + sumArr(arr,i+1)
}

/* 
    Given an array nested with unknown amount of arrays,
    return the integers all under ONE array
    Array.isArray() will come in useful
    Array.isArray([1,2,3]) returns true
    Array.isArray({'a':1}) returns false
*/

function recFlatten(arr){
var newArr = []
for (var i = 0; i<arr.length; i++) {
    if(Array.isArray(arr[i]) == false) {
      newArr.push(arr[i])
    } else {
      newArr.push(recFlatten(arr[i])) // arr[i] = [2,3,[4]]
    }
  }
  return newArr
}

recFlatten([1,[2,3,[4]],5])
// THERE IS A CONCAT METHOD THAT COMBINES TWO ARRAYS INTO ONE
function recFlatten(arr){
  var newArr = []
  for (var i = 0; i<arr.length; i++) {
      if(Array.isArray(arr[i]) == true) {
        newArr = newArr.concat(recFlatten(arr[i])) // arr[i] = [2,3,[4]]
      } else {
        newArr.push(arr[i])
      }
    }
    return newArr
  }
  
  recFlatten([1,[2,3,[6]],5]) 


// EX. [1,[2,3,[4]],5] => [1,2,3,4,5]

// arr[0]
// if arr[i].isArray => recursive function arr[0]
// 

if (Array.isArray == false){
  newArr.push arr[i]
} else {
  recFlatten(arr[i]) //return newArr + recFlatten(arr[i])??
}

var arr = [1,[2,3,[4]],5]
Array.isArray(arr[3])
console.log(arr[0], 'arr 0') => 1
console.log(arr[1], 'arr 1') => [2,3,[4]]               arr[1][0]
console.log(arr[2], 'arr 2') => 5
console.log(arr[3], 'arr 3')
console.log(arr[1][2]) => [4]
arr[1][2][0] == 4
arr[1][2] == [4]




/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

function recursiveBinary(arr, target) {
  if (arr.length == 2 && arr[arr.length - 1] > target) {
    return false
  }
  if (arr.length == 2) {
    return arr[0] == target
  }
  let midIndex;
  let numToremove;
  if (arr.length % 2 == 1) {
    midIndex = (arr.length - 1) / 2
    numToremove = midIndex
    
  } else {
    midIndex = (arr.length - 2) / 2
    numToremove = midIndex + 1
  }
  let newArr;
  if (arr[midIndex] < target) {
    if (arr.length % 2 == 1) {
      
    }
    arr.splice(- numToremove)
    return recursiveBinary(arr,target)
  }
  if (arr[midIndex] > target) {
    arr.splice(0, numToremove)
    return recursiveBinary(arr,target)
  }
  if (arr[midIndex] == target) {
    return true;
  }


}
function recursiveBinary(arr, target){
  var mid = Math.floor(arr.length / 2)

  if (target == arr[mid]){
    return true
  }
  else if (target > arr[mid]){
    var newArr = arr.slice(mid + 1, arr.length)
    return recursiveBinary(newArr, target)
  }
  else if (target < arr[mid]){
    var newArr = arr.slice(0, mid)
    return recursiveBinary(newArr, target)
  }
  return false
}

// THUR

/* 
    Rising Square
    Given a number return an array filled with the
    squares of integers up to given number

*/
function risingSquares(num, arr){
  if (num < 0){
    return "Number is less that 0"
  }
  if(num === 0){
    return arr
  }
  arr.unshift(num*num)
  return risingSquares(num - 1, arr)
}
// EX. 3 => [1,4,9]
// EX. 5 => [1,4,9,16,25]

/* 
  recursively find the lowest common multiple between two numbers
  "A common multiple is a number that is a multiple of two or more integers. 
  The common multiples of 3 and 4 are 0, 12, 24, .... 
  The least common multiple (LCM) of two numbers is the smallest number (not zero) 
  that is a multiple of both."
  
  Try writing two columns of multiples as a starting point:
  starting with 15 and 25 and keep writing their multiples until you find the lowest common one
  then turn this in to a step by step instruction
  15 25
  30 50
  45 75
  60
  75
  75 is the first common
*/
// let the two numbers be x,y
//  c/y = y * I1
// c/x = x * I2
// y * I1 = x * I2
//  (y * I1) / x = I2

//  (y * I) % x == 0

function LCM(a,b, aMult=a, bMult=b){
  if (aMult == bMult){
    return aMult
  }
  if (aMult < bMult){
    return LCM(a, b, aMult + a, bMult)
  } 
  else if (aMult > bMult){
    return LCM(a, b, aMult, bMult + b)
  }
}