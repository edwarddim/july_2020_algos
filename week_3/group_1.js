                                                                                                                                                                                                                                                                                        /*
  Balance Point
  Write a function that returns whether the given
  array has a balance point BETWEEN indices,
  where one side’s sum is equal to the other’s.
*/
function balancePoint(arr){

}

// Jonas
function balancePoint(arr) {
  isum = 0
  for (var i = 0; i < arr.length; i++) {
    isum += arr[i]
    jsum = 0
    for (var j = i + 1; j < arr.length; j++) {
      jsum += arr[j]
    }
    if (isum == jsum) {
      return true
    } else if (jsum == 0) {
      return false
    }
  }
}

i = 1, j = 19 => false
i = 3, j = 17 => false
i = 6, j = 14 => false
i = 10, j = 10 => true (should stop here)
i = 20, j = 0 => false (should stop here)
// EX. [1, 2, 3, 4, 10] => TRUE
// EX. [1, 2, 4, 2, 1] => FALSE

function balancePoint(arr){
  var firstSum = 0
  var lastSum = 0
  for(var x = 0; x < arr.length; x++){
    firstSum = 0
    lastSum = 0
    for(var i = 0 ; i < arr.length - x; i++){
      firstSum += arr[i]
      console.log(firstSum, " first")
    }
    for(var j = arr.length -1; j > i-1; j--){
      lastSum += arr[j]
      console.log(lastSum, " last")
    }
    if(firstSum == lastSum){
      return true
    }
  }
  return firstSum, lastSum + " return"
}




// find sum of all numbers from index to end of array
// check to see if all numbers from index = the number index
// else increment index
// check to see if all numbers from index (to end of array), = the sum of numbers up to the index
// if number is undefined, return false


function balancePoint(arr){

}
// EX. [1, 2, 3, 4, 10] => TRUE
// EX. [1, 2, 4, 2, 1] => FALSE

/*
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
*/
function binarySearch(arr, target){
  var start = 0
  var end = arr.length-1
  if(arr[start] > target || arr[end] < target){
    return false
  }
  while (end > start){
    var mid = Math.floor((start + end) /2)
    if (target == arr[mid]){
      return true
    }
    if (target > arr[mid]){
      start = mid
    }
    if (target < arr[mid]){
      end = mid
    }
  }
  return false
}

binarySearch([1,2,3,4,5,6,7,8,9,10], 8)

// Check if middle of array = target return true, if not
// check if arr[middle] < target
//    if so, arr[middle] becomes arr[start]
// else if arr[middle] > target
//    arr[middle] becomes arr[end]


binarySearch([1,2,3,4,5,6,7,8,9,10], 0)
binarySearch([11,12,13,14,15,16,17,18,19,20], 0)
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 11))


// Edward's solution from Web Fundamentals algo session:
function binarySearch(arr, target){
  for (var i = 0; i < arr.length; i++) {
      var start = 0
      var end = arr.length - 1
      var middle = (start+end)/2
      if(arr[start] > target || arr[end] < target){  // under these conditions, the target doesn't exist inside the array
          return false
      }
      else if(arr[start] || arr[end] || arr[middle] == target){  // I added this part; if start/end/middle is the target, you don't need to do a search
          return true
      }
      while(start <= end){  // because in a sorted array the start point on the L needs to be smaller or equal to the end point on the R
          if(arr[middle] == target){
              return true
          }
          else if(target > arr[middle]) {
              start = middle + 1  // because you know target is on the R side of middle so start at the next index to the R of middle
          }
          else{
              end = mid - 1  // because you know the target is on the L side of middle so end at the index to the L of middle
          }
      }
  }
  return false  // because target is not found inside the array
}
console.log(binarySearch([1,2,3,4,5,6], 5))  // prints True
console.log(binarySearch([1,2,3,4,5,6], 9))  // prints False

/*
  Array: Remove Duplicates
  Given a SORTED array of integers, dedupe the array
  Because array elements are already in order, all duplicate values will be grouped together.
  Ok to use a new array
  Bonus: do it in O(n) time (no nested loops, new array ok)
*/
function dedupeArr(arr){

}

function dedupeArr(arr){
  newArr = [];
  for (var i = 0;i < arr.length;i++){
    if (arr[i] == arr[i+1]) {
      i+2
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr
}
dedupeArr([1,1,1,1,2,2,2,2,2,5,5,5,5,6,6,6,6]) // => [1,2,5,6]

function dedupeArr(arr){
  var newArr = []
  for(var i = 0; i < arr.length; i++){
    if(newArr.indexOf(arr[i]) == -1){
      newArr.push(arr[i])
    }
  }
  return newArr
}
console.log(dedupeArr([1,1,1,2,2,2,3,3,4,4,4]))


// iterate through an arr of numbers
// if number after arr[i] is = to arr[i], skip
// increment i by 2
// else, push to new arr
// return new arr

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



function mode(arr){
  var newArr = [];
  var maxcount = 0
  var count = 1
  for (var i = 0;i < arr.length;i++){
    if (arr[i] == arr[i+1]) {
      count += 1
    } else if (count == maxcount) {
      maxcount = count
      newArr.push(arr[i])
      count = 1
    } else if (count > maxcount) {
      maxcount = count
      newArr.shift()
      newArr.push(arr[i])
    }
  }
  return newArr
}

console.log(mode([1,1,1,2,2,2,3,3,4,4,4]))

// this one
function mode(arr){
  var newArr = [];
  var maxcount = 0
  var count = 1
  for (var i = 0;i < arr.length;i++){
    if (arr[i] == arr[i+1]) {
      count++
    } else if (count > maxcount) {
      maxcount = count
      newArr.push(arr[i])
      count = 1
  }
}
return newArr
}

function mode(arr) {
  var count = 1
  while (arr[i] < arr[i+1]){
    count++
  }
}
 => [1,3,4]
mode([1,1,1,1,2,3,3,3,3,3,4,4,4,4,5,9]) => [1,3]
mode([1,1,2,3,3,3,3,3,4,4,4,4,5,9]) => [1,3]


// create newArr to hold single values of old array
// interate over old arr of numbers
// create var to hold max value (var temp = 0)
//



/*
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
  NO SORT ALLOWED
*/

function missingValue(arr){
  var min = arr[0]
  var max = arr[0]
  for ( var x = 0; x < arr.length; x++){
    if (arr[x] < min){
      min = arr[x]
    }
    if (arr[x] > max){
      max = arr[x]
    }
  }
    if( min <= 0){
      return false
    }
  for (var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr.length; j++){
      if (arr[j] == min +1){
        min = arr[j]
      }
    }
  }
  if( min != max){
    return "missing value is " + (min + 1)
  }
  return true
}

console.log(missingValue([1, 5, 6 , 0, 3, 4]))


  function missingValue(arr){
  var min = arr[0]
  var max = arr[0]
  for ( var x = 0; x < arr.length; x++){
    if (arr[x] < min){
      min = arr[x]
    }
    if (arr[x] > max){
      max = arr[x]
    }
  }
    if( min <= 0){
      return false
    }
  var sum = 0
    for(var i = min; min< max; i++){
      sum += i
    }

    var arrSum = 0
    for (var j = 0; j < arr.length; j++){
      arrSum += arr[j]
    }
    if (sum != arrSum){
      return false
    }
    return true
}


// iterate through array
// use a pointer, to start at 0
// if arr[i] == pointer + 1
// pointer  o


