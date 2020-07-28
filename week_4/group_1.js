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