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

// THUR

/*
    Rising Square
    Given a number return an array filled with the
    squares of integers up to given number

*/
function risingSqaures(num, arr){

}
// EX. 3 => [1,4,9]
// EX. 5 => [1,4,9,16,25]



/*
    Rising Square
    Given a number return an array filled with the
    squares of integers up to given number
*/
function risingSqaures(num, arr=[]){
  if (num < 1) {
    return arr;
  }
  arr.unshift(num*num);
  return risingSqaures(num-1, arr);
}
// EX. 3 => [1,4,9]
// EX. 5 => [1,4,9,16,25]
console.log(risingSqaures(0)); // []
console.log(risingSqaures(3)); // [1,4,9]
console.log(risingSqaures(5)); // [1,4,9,16,25]

function risingSqaures(num, arr=[]){

  if (num < 1){
      return arr.reverse(arr)
  }
  else {
      arr.push(num*num)
      return risingSqaures(num-1, arr)
  }
}

//unshift is cool

//unshift is cool, learned so
// yeah javascript arrays have some really nice methods
// Why does liveshare always seem to copy paste stuff?


//unshift is cool, learned so
// yeah javascript arrays have some really nice methods
// Why does liveshare always seem to copy paste stuff?



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
function lcm(a, b, aMult=a, bMult=b) {
  if (aMult === a*b && bMult === a*b) {
    return a*b;
  } else if (aMult === bMult) {
    return aMult;
  }
  if (bMult === a*b) {
    bMult = b;
    aMult += a;
  } else {
    bMult += b;
  }
  return lcm(a, b, aMult, bMult)
}

// LCM tests
console.log(lcm(1,5)); // 5
console.log(lcm(2,7)); // 14
console.log(lcm(5,10)); // 10
console.log(lcm(15, 25)); // 75
console.log(lcm(34, 2)); // 34
console.log(lcm(6,4)); // 12
console.log(risingSqaures(3));
console.log(risingSqaures(5));




/*
    String Subset
    Given a string, return an array filled
    with IN-ORDER substrings
*/


function stringSubset(string, arr=[]) {
  if (string === '') {
    arr.push('');
    return arr;
  }
  for (var i = string.length; i > 0; i--) {
    arr.push(string.slice(0, i));
  }
  return stringSubset(string.slice(1), arr);
}

// EX. "ABC" => ["ABC", "AB", "A", "BC", "B", "C", ""]
// Tests
console.log(stringSubset("")); // [""]
console.log(stringSubset("ABC")); // ["ABC", "AB", "A", "BC", "B", "C", ""]
console.log(stringSubset('cbda')) // ['cbda', 'cbd', 'cb', 'c', 'bda', 'bd', 'b', 'da', 'd', 'a', '']
