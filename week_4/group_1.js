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

