/*
  Recursive Sigma
  Input: integer
  Output: sum of integers from 1 to Input integer
*/
function recursiveSigma(n) {
  if (n == 1) {
    return 1
  }
  return n + recursiveSigma(n - 1)
}
recursiveSigma(4)
/*
  Recursively sum an arr of ints
*/
// input was 5
// first time --->  5 + funct(4)

// second ---->  5 + 4 + funct(3)

// third ----> 5 + 4 + 3 + funct(2)

// fourth --->  5 + 4 + 3 + 2 + funct(1)
//  fith ---> 5 + 4 + 3 + 2 + 1


function sumArr(arr, i = 0) {
  if (i == arr.length -1){
    return arr[i]
  }
  return arr[i] + sumArr(arr,i+1)
}