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

