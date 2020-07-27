/*
  Balance Point
  Write a function that returns whether the given
  array has a balance point BETWEEN indices,
  where one side’s sum is equal to the other’s.
*/

function balancePoint(arr){
  if (arr.length <= 2){
      return false
  }
  var totalstart = 0
  for (var i=0; i<arr.length-1; i++){
      totalstart+=arr[i]
      var totalend = 0
      for (var j=arr.length-1; j>i; j--){
          totalend+=arr[j]
      }
      if (totalstart == totalend){
          return true
      }
  }
  return false
}
// EX. [1, 1]
// EX. [1, 2, 3, 4, 10] => TRUE
// EX. [1, 2, 3, 2, 4] => TRUE
// EX. [1, 2, 4, 2, 1] => FALSE

function balanceIndex(arr){
  if (arr.length <= 2){
    return -1
  }
  var totalstart = 0
  for (var i=0; i<arr.length-1; i++){
    totalstart += arr[i]
    var totalend = 0
    for (var j=arr.length-1; j>i+1; j--){
      totalend += arr[j]
    }
    if (totalstart == totalend){
      return i+1
    }
  }
  return -1
}
// EX. [-2, 5, 7, 0, 3] => 2
// EX. [5,0,2,3] => 1
// EX. [9,0,9] => 1
// EX. [9,9] => -1


/*
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
*/
function binarySearch(arr, target){

}

function binarySearch(arr, target) {
  var left = 0;
  var right = arr.length - 1;
  if (target < arr[left] || target > arr[right]) {
    return false;
  }
  while (left <= right) {
    var mid = Math.floor((right + left) / 2);
    if (target === arr[mid]) {
      return true;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
}

// Tests, ran in jsbin and node
console.log(binarySearch([], 1)); // false
console.log(binarySearch([1,2], 3)); // false
console.log(binarySearch([1,2,4,5,6], 3)); // false
console.log(binarySearch([1], 1)); // true
console.log(binarySearch([1,2], 1)); // true
console.log(binarySearch([1,2], 2)); // true
console.log(binarySearch([1,2,3], 3)); // true
console.log(binarySearch([1,2,3,5,6], 5)); // true
console.log(binarySearch([1,2,3,4,5,6], 2)); // true
console.log(binarySearch([1,2,3,4,5,6], 6)); // true

/* 
  Array: Remove Duplicates
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.
  Ok to use a new array
  Bonus: do it in O(n) time (no nested loops, new array ok)
*/
function dedupeArr(arr){

}

/* 
  Array: Mode
  
  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.
  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/
function mode(arr){

}

// THUR
/* 
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
  NO SORT ALLOWED
*/
function missingValue(arr) {
  let maxNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (!arr.includes(maxNumber - i)) {
      return true;
    }
  }
  return false;
}


// THIS DOESN'T WORK FOR THIS CASE: [3,0,2,2] => True
// [3,0,1,2] => False
// [4,0,2,1] => True

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//


