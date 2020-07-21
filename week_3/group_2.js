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
