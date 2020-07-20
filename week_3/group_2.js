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