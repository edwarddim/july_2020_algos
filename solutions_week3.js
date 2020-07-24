function balancePoint(arr) {
    const length = arr.length;
  
    if (length < 2) {
      return false;
    }
  
    let left = arr[0];
    let right = 0;
  
    for (let i = 1; i < length; i++) {
      right += arr[i];
    }
  
    for (let i = 1; i < length; i++) {
        if (left === right) {
            return true;
        }
  
        right -= arr[i];
        left += arr[i];
    }
    return false;
}

function binarySearch(arr, target) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor(rightIdx - leftIdx / 2);

    if (arr[midIdx] === target) {
      return true;
    }

    if (target < arr[midIdx]) {
      rightIdx = midIdx - 1;
    } else {
      leftIdx = midIdx + 1;
    }
  }
  return false;
}


function removeDuplicates(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const dedupedArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== dedupedArr[dedupedArr.length - 1]) {
      dedupedArr.push(arr[i]);
    }
  }
  return dedupedArr;
}

function findAllModes(arr) {
  if (arr.length === 1) {
    return [arr[0]];
  }

  const modes = [];
  const freq = {};
  let maxFreq = 0;
  let allSameFreq = true;

  for (const n of arr) {
    freq.hasOwnProperty(n) ? freq[n]++ : (freq[n] = 1);

    if (freq[n] > maxFreq) {
      maxFreq = freq[n];
    }
  }

  for (const key in freq) {
    if (freq[key] === maxFreq) {
      // keys are strings, convert back to int
      modes.push(parseInt(key));
    } else {
      allSameFreq = false;
    }
  }
  // return empty array if allSameFreq, else return modes
  return allSameFreq ? [] : modes;
}


function missingValue(arr){
  var min = arr[0]
  var max = arr[0]
  var arrSum = 0;
  for ( var x = 0; x < arr.length; x++){
    if (arr[x] < min){
      min = arr[x]
    }
    if (arr[x] > max){
      max = arr[x]
    }
    arrSum += arr[x]
  }
  if( min < 0){
    return false
  }
  var sum = 0;
  for(var i = min; i <= max; i++){
    sum += i
  }
  console.log(sum)
  console.log(arrSum)
  console.log("Difference", Math.abs(arrSum - sum))
}