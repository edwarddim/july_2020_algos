/* 
  Balance Point
  Write a function that returns whether the given
  array has a balance point BETWEEN indices, 
  where one side’s sum is equal to the other’s. 
*/
function balancePoint(arr){
  let sum1 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i];
    let sum2 = 0;
    for (let j = arr.length - 1; j >= i; j--) {
      sum2 += arr[j];
    }
    if (sum1 == sum2) {
      return true
    }
  }
  return false
}
// EX. [1, 2, 3, 4, 10] => TRUE
// EX. [1, 2, 4, 2, 1] => FALSE
function balanceIndex(arr){
  let sum1 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i];
    let sum2 = 0;
    for (let j = arr.length - 1; j >= 0; j--) {
      sum2 += arr[j];
      if (sum1 == sum2 && i == j) {
        return i
      }
    }
  }
  return -1
}
// EX. [-2, 5, 7, 0, 3] => 2
// EX. [9,0,9] => 1
// EX. [9,9] => -1

/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
*/
function binarySearch(arr,target){
  var startPointer = 0;
  var endPointer = arr.length - 1;
  while (startPointer <= endPointer) {
    var midPointer = Math.floor((startPointer + endPointer) / 2);
    if (arr[midPointer] == target) {
      return true
    }
    if (arr[midPointer] > target) {
      endPointer = (startPointer + endPointer) / 2;
    }
    if (arr[midPointer] < target) {
      startPointer = (startPointer + endPointer) / 2;
    }
  }
  return false
}

console.log(binarySearch([-3,-2,-1,0,1,2,3,4,5,6], -1));