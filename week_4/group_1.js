/*
  Recursive Sigma
  Input: integer
  Output: sum of integers from 1 to Input integer
*/
function recursiveSigma(n) {
  if (n <= 0) {
    return 0;
  }
  return n + recursiveSigma(n-1);
}

/*
  Recursively sum an arr of ints
*/

function sumArr(arr, i = 0) {
  if (i < 0) {
    return sumArr(arr, 0);
  } else if (i >= arr.length) {
    return 0;
  }
  return arr[i] + sumArr(arr, i+1);
}

/*
    Given an array nested with unknown amount of arrays,
    return the integers all under ONE array
    Array.isArray() will come in useful
    Array.isArray([1,2,3]) returns true
    Array.isArray({'a':1}) returns false
*/

function recFlatten(arr){

}

function recFlatten(arr){
  var newArr = []
  for (var i=0; i<arr.length; i++){
    if (Array.isArray(arr[i])){
      newArr = newArr.concat(recFlatten(arr[i]))
    }
    else {
      newArr.push(arr[i])
    }
  }
  return newArr
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
  if (arr.length <= 1 && arr[0] !== target) {
    return false;
  }
  var mid = Math.floor(arr.length / 2);
  if (arr[mid] === target) {
    return true;
  } else if (arr[mid] < target) {
    return recursiveBinary(arr.slice(mid + 1), target);
  }
  return recursiveBinary(arr.slice(0, mid), target);
}

// Tests
console.log(recursiveBinary([], 1)); // false
console.log(recursiveBinary([4,5,6], 1)); // false
console.log(recursiveBinary([1,2,3], 9)); // false
console.log(recursiveBinary([1,2,3,5,6,7,8,9], 4)); // false
console.log(recursiveBinary([1], 1)); // true
console.log(recursiveBinary([1,2], 2)); // true
console.log(recursiveBinary([-7,-2,0], -7)); // true
console.log(recursiveBinary([1,2,3,5,6,7,8], 6)); // true
console.log(recursiveBinary([1,2,3,5,6,7,8,9], 8)); // true





// WED


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

}

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//