/*
  Recursive Sigma
  Input: integer
  Output: sum of integers from 1 to Input integer
*/
// 1, BASE CASE
// 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
// 3. RECURSIVE CALL
function recursiveSigma(n) {
  // BASE CASE WHEN N REACHES 0
  if( n == 0){
    return 0
  } else {
    return n + recursiveSigma(n-1)
  }
  // RECURSIVELY CALL AND DECREMENTING N
}

console.log(recursiveSigma(5))



n = 5
5 + (n at 4) // is the new n
4 + (n at 3) // is the new n
3 + (n at 2)
2 + (n at 1)
1 + (n at 0)
0

// [5,4,3,2,1] => 5 + 4 + 3 + 2 + 1 = 15

/*
  Recursively sum an arr of ints
*/

function sumArr(arr, i = 0) {
  if( arr == []){
    return 0
  } else {

  }

}
sumArr([1,2,3])


function sumArr(arr, i = 0) {
  if(i == arr.length){
    return 0
  } else {
    return arr[i] + sumArr(arr, i+1)
  }

}
sumArr([1,2,3])


arr[i] = 1
then we find the 2nd index (i = 0, + 1, so i = 1)
arr[i] = 2




// return arr[i] + sumArr[i+1]???
// close. arr[i] + sumArr(arr, i + 1)
// THE SECOND ARGUMENT IS AN INDEX


function sumArr(arr, i = 0) {
  if(i == arr.length){
    return 0
  } else {
    return arr[i] + sumArr(arr, i + 1)
  }

}
sumArr([1,2,3])


/* 
    Given an array nested with unknown amount of arrays,
    return the integers all under ONE array
    Array.isArray() will come in useful
    Array.isArray([1,2,3]) returns true
    Array.isArray({'a':1}) returns false
*/

function recFlatten(arr){

}

// EX. [1,[2,3,[4]],5] => [1,2,3,4,5]


/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

function recursiveBinary(arr, target){
  console.log(arr)
  var left = 0
  var right = arr.length - 1;
  if (target < arr[left] || target > arr[right]) {
    return "Target not Found"
  }
  if (arr.length == 0){
    return false
  } 
  var mid = Math.round((right + left) / 2)
  if (target === arr[mid]) {
    return "Target Found"
  } else if (target > arr[mid]) {
    return recursiveBinary(arr.splice(mid), target)
  } else if (target < arr[mid]) {
    return recursiveBinary(arr.splice(0,mid), target)
  }
}
recursiveBinary([1,2,3,4,5,6,7], 5)

function recursiveBinary(arr, target){
  console.log(arr)
  var left = 0
  var right = arr.length - 1;
    if (target < arr[left] || target > arr[right]) {
    return "Target not Found"
  }
  var mid = Math.round((right + left) / 2)
  if (target === arr[mid]) {
    return "Target Found: target is " + target
  } else if (target > arr[mid]) {
    return recursiveBinary(arr.splice(mid), target)
  } else {
    return recursiveBinary(arr.splice(0,mid), target)
  }
}
recursiveBinary([1,2,3,4,5,6,7], 1)
recursiveBinary([1,2,5,6,7,8,9], 3)
recursiveBinary([1,2,5,6,7,8,9], 1 + 1)
recursiveBinary([1,2,5,6,7,8,9], -1)

recursiveBinary(arr, target, left=0, right=(arr.length - 1))

function binarySearch(arr, target, start=0, stop=(arr.length-1)) {

  let midPoint = Math.floor(((stop-start)/2) + start)

  switch (true) {
    case arr[midPoint] === target:
      return true
    case stop - start === 0:
      return false
    case arr[midPoint] < target:
      return binarySearch(arr, target, midPoint+1, stop)
    case arr[midPoint] > target:
      return binarySearch(arr, target, start, midPoint)
  }
}
The speed of a switch statement vs. an if-else chain depends on several factors, most notably the programming language and the amount of conditionals in each. A switch statement was used here primarily for readability. It is a control flow that matches what we are concerned with handling in this recursive function: 4 discrete cases, each requiring different action. Additionally, a few individuals have a rare allergy to if-else statements that exceed 3 logical tests. For more information on JavaScript's switch statement and its performance vs. if-else, please take a look at this post: Javascript switch vs. if...else if...else, which links to this more informative page http://archive.oreilly.com/pub/a/server-administration/excerpts/even-faster-websites/writing-efficient-javascript.html