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
function balanceIndex(arr){

}
// EX. [-2, 5, 7, 0, 3] => 2
// EX. [9,0,9] => 1
// EX. [9,9] => -1
