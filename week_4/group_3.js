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