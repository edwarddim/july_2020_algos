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




/* 
    Rising Square
    Given a number return an array filled with the
    squares of integers up to given number

*/
// EX. 3 => [1,4,9]
// EX. 5 => [1,4,9,16,25]



function risingSquares(num, arr){
  if (num == 0){
    return arr
  } else {
    arr.unshift(num * num)
    return risingSquares(num -1, arr)
  }
}
console.log(risingSquares(3, []))


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

  3 4
  6 8
  9 12
  12

  6 9
  12 18
  18
*/

function LCM(a,b, aMult, bMult){
  if(a*aMult > b*bMult){
    return LCM(a,b,aMult,bMult+1)
  }
  if(a*aMult < b*bMult){
    return LCM(a,b,aMult+1,bMult)
  }
  if(a*aMult == b*bMult){
    return a*aMult
  }
}
LCM(7, 17, 1, 1)



// beverly
function LCM(a,b, aMult=a, bMult=b){
  if(a + aMult > b + bMult){
    return LCM(a, b, aMult, bMult+=b)
  }
  if(a + aMult < b+bMult){
    return LCM(a, b, aMult+=a, bMult)
  }
  if(a + aMult == b + bMult){
    return aMult
  }
}
console.log(LCM(6, 10, aMult=6, bMult=10))
console.log(LCM(6, 100, aMult=6, bMult=100))
console.log(LCM(6, 12, aMult=6, bMult=12)) == 24 //this one



// Working!

function LCM(a,b, aMult=a, bMult=b){
  if(aMult > bMult){
    return LCM(a, b, aMult, bMult+=b)
  }
  if(aMult < bMult){
    return LCM(a, b, aMult+=a, bMult)
  }
  if(aMult == bMult){
    return aMult;
  }
}

console.log(LCM(6, 12, aMult=6, bMult=12))

// okay working
// good!
// why cant it just be a < b, why amult < bmult?
// oh because that is what we are incrementing. yeah

function LCM(a,b, aMult=a, bMult=b){
  if(a * aMult > b*bMult){
    bMult++
    return LCM(a,b,aMult,bMult)
  }
  if(a * aMult < b*bMult){
    aMult++
    return LCM(a,b,aMult,bMult)
  }
  if(a * aMult == b*bMult){
    return a*aMult
  }
}
console.log(LCM(3, 4, aMult=2, bMult=2))


/*
    String Subset
    Given a string, return an array filled
    with IN-ORDER substrings
*/


function stringSubset(string, arr){

}


if (str.length < 0)
  stringSubset(str.shift())
  if (str.length > 0)
  stringSubset(str.length -1)
  
  
  
  if (str == 0)
  str.substring(1) =>  BC
  stringSubset("ABC", [])
// EX. "ABC" => ["ABC", "AB", "A", "BC", "B", "C", ""]
// EX. "ABCD" => ["ABCD", "ABC", "AB","A",??? "BCD", "BC", "B", "CD", "C", "D", ""]



function stringSubset(string, arr){
  if (arr == []) {
    return 0
  } 
}
stringSubset("ABC", [])


fu
// EX. "ABC" => ["ABC", "AB", "A", "BC", "B", "C", ""]




function stringSubset(str, arr){
  if(str.length == 0){
    return arr
  }
  arr.push(str)
  console.log(str)
  stringSubset(str.slice(0, str.length-1), arr)
}




function stringSubset(str, arr){
  if(str.length == 0){
    stringSubset(str.substring(1))
  }
  arr.push(str)
  console.log(str)
  stringSubset(str.substring(0, str.length-1), arr)
}


console.log(stringSubset('ABC', []))


//'ABC' ==> 'abc', 'ab', 'a'





function stringSubset(str, arr){
  if(str.length == 0){
    return arr
  }
  if(str.length == 1){
    console.log(str, 'just str', arr[0])
    arr.push(str)
    stringSubset(arr[0].substring(1), arr)
    console.log(str, arr, 'str.length ==1')
  }
  arr.push(str)
  console.log(str, arr, 'first')
  stringSubset(str.substring(0,str.length-1), arr)
}


console.log(stringSubset('ABC', []))