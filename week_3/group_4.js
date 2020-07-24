/*
  Balance Point
  Write a function that returns whether the given
  array has a balance point BETWEEN indices,
  where one side’s sum is equal to the other’s.
*/
function balancePoint(arr){
  let sum1 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i];
    let sum2 = 0;
    for (let j = arr.length - 1; j >= i; j--) {
      sum2 += arr[j];
    }
    if (sum1 == sum2) {
      return true
    }
  }
  return false
}
// EX. [1, 2, 3, 4, 10] => TRUE
// EX. [1, 2, 4, 2, 1] => FALSE
function balanceIndex(arr){
  let sum1 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i];
    let sum2 = 0;
    for (let j = arr.length - 1; j >= 0; j--) {
      sum2 += arr[j];
      if (sum1 == sum2 && i == j) {
        return i
      }
    }
  }
  return -1
}
// EX. [-2, 5, 7, 0, 3] => 2
// EX. [9,0,9] => 1
// EX. [9,9] => -1

/*
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
*/
function binarySearch(arr,target){
  var startPointer = 0;
  var endPointer = arr.length - 1;
  while (startPointer <= endPointer) {
    var midPointer = Math.floor((startPointer + endPointer) / 2);
    if (arr[midPointer] == target) {
      return true
    }
    if (arr[midPointer] > target) {
      endPointer = (startPointer + endPointer) / 2;
    }
    if (arr[midPointer] < target) {
      startPointer = (startPointer + endPointer) / 2;
    }
  }
  return false
}

console.log(binarySearch([-3,-2,-1,0,1,2,3,4,5,6], -1));


/***  Wednesday algos  ***/

/*
  Array: Remove Duplicates
  Given a SORTED array of integers, dedupe the array
  Because array elements are already in order, all duplicate values will be grouped together.
  Ok to use a new array
  Bonus: do it in O(n) time (no nested loops, new array ok)
*/
function dedupeArr(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var first_num = arr[i]
    newArr.push(arr[i]);
    while (arr[i+1] === first_num) {
      i++;
    }
  }
  return newArr;
}

/*
  Array: Mode

  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.
  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/
function mode(arr) {
  var modeArr = [];
  var modeCount = 0;
  var counts = {};

  for (var num of arr) {
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
    if (counts[num] > modeCount) {
      modeCount = counts[num];
      modeArr = [num];
    } else if (counts[num] === modeCount) {
      modeArr.push(num);
    }
  }

  if (modeArr.length === 1) {
    return modeArr[0];
  } else if (modeArr.length === Object.keys(counts).length) {
    return [];
  }
  return modeArr;
}

// Tests
console.log('\nDedupe tests')
console.log(dedupeArr([])); // []
console.log(dedupeArr([1,2,3])); // [1,2,3]
console.log(dedupeArr([1,1,1,1,2,2,3,3,3,4,5,8])); // [1,2,3,4,5,8]
console.log(dedupeArr([1,1,3,3,5,5,5,7,9,9,9])); // [1,3,5,7,9]

console.log('\nMode tests')
console.log(mode([])); // []
console.log(mode([1,1,2,2,3,3])); // []
console.log(mode([1,3,4,2,5,6,3,4,4])); // 4
console.log(mode([1,1,2,2,5,6,3,4,4])); // [1,2,4]

f





/*
  Array: Remove Duplicates
  Given a SORTED array of integers, dedupe the array
  Because array elements are already in order, all duplicate values will be grouped together.
  Ok to use a new array
  Bonus: do it in O(n) time (no nested loops, new array ok)
*/
function dedupeArr(arr){
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i+1]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
dedupeArr([0,0,0,0,1,1,2,2,2,3]);

dedupeArr([4,5,5,6,6,6,7,8]);

/*
  Array: Mode

  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.
  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/


// return true false only
function missingValue(arr) {
  var sum = 0;
  var arrSum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += i;
    arrSum += arr[i];
  }
  return sum !== arrSum;
}

// Return missing num (working?)
function missingValue(arr) {
  var sum = 0;
  var arrSum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += i;
    arrSum += arr[i];
  }
  if (sum !== arrSum) {
    return sum + arr.length - arrSum
  }
  return false;
}




/*
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
  NO SORT ALLOWED
*/
function missingValue(arr){

}



// Works
function missingValue(arr){
  count = 0;
  sum = 0;

  for (i = 0; i < arr.length; i ++){
      sum += arr[i]
      count += i
  }

  if (sum == count){
      return "Has all numbers."
  } else {
      var misnum = count + arr.length - sum
      return "Missing number: " + misnum
  }
}




/*
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
  NO SORT ALLOWED
*/
function missingValue(arr){

}







function missingValue(arr){
    for(var i = 0; i < arr.length-1; i++){
        for (var j = 0; j < arr.length-1-i; j++){
            if (arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr);
    for (var x = 0; x < arr.length-1; x++){
        if (arr[x] - arr[x-1] !== 1 ){
        return true;
        } else {
        return false;
        }
    }
}


//
function missingValue1(arr){
  count = 0;
  sum = 0;

  for (i = 0; i < arr.length; i ++){
      sum += arr[i]
  }
  console.log(sum)

  for (i = 0; i < arr.length; i ++){
      count += i
  }
  console.log(count)

  if (sum == count){
      return "Has all numbers."
  } else {
      return "Missing a number."
  }
}}




/*
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
  NO SORT ALLOWED
*/
function missingValue(arr){

}







function missingValue(arr){
    for(var i = 0; i < arr.length-1; i++){
        for (var j = 0; j < arr.length-1-i; j++){
            if (arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr);
    for (var x = 0; x < arr.length-1; x++){
        if (arr[x] - arr[x-1] !== 1 ){
        return true;
        } else {
        return false;
        }
    }
}


//
function missingValue1(arr){
  count = 0;
  sum = 0;

  for (i = 0; i < arr.length; i ++){
      sum += arr[i]
  }
  console.log(sum)

  for (i = 0; i < arr.length; i ++){
      count += i
  }
  console.log(count)

  if (sum == count){
      return "Has all numbers."
  } else {
      return "Missing a number."
  }
}}




/*
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
  NO SORT ALLOWED
*/
function missingValue(arr){

}







function missingValue(arr){
    for(var i = 0; i < arr.length-1; i++){
        for (var j = 0; j < arr.length-1-i; j++){
            if (arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr);
    for (var x = 0; x < arr.length-1; x++){
        if (arr[x] - arr[x-1] !== 1 ){
        return true;
        } else {
        return false;
        }
    }
}


//
function missingValue1(arr){
  count = 0;
  sum = 0;

  for (i = 0; i < arr.length; i ++){
      sum += arr[i]
  }
  console.log(sum)

  for (i = 0; i < arr.length; i ++){
      count += i
  }
  console.log(count)

  if (sum == count){
      return "Has all numbers."
  } else {
      return "Missing a number."
  }
}}




/*
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
  NO SORT ALLOWED
*/
function missingValue(arr){

}







function missingValue(arr){
    for(var i = 0; i < arr.length-1; i++){
        for (var j = 0; j < arr.length-1-i; j++){
            if (arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr);
    for (var x = 0; x < arr.length-1; x++){
        if (arr[x] - arr[x-1] !== 1 ){
        return true;
        } else {
        return false;
        }
    }
}


//
function missingValue1(arr){
  count = 0;
  sum = 0;

  for (i = 0; i < arr.length; i ++){
      sum += arr[i]
  }
  console.log(sum)

  for (i = 0; i < arr.length; i ++){
      count += i
  }
  console.log(count)

  if (sum == count){
      return "Has all numbers."
  } else {
      return "Missing a number."
  }
}}




/*
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
  NO SORT ALLOWED
*/
function missingValue(arr){

}







function missingValue(arr){
    for(var i = 0; i < arr.length-1; i++){
        for (var j = 0; j < arr.length-1-i; j++){
            if (arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr);
    for (var x = 0; x < arr.length-1; x++){
        if (arr[x] - arr[x-1] !== 1 ){
        return true;
        } else {
        return false;
        }
    }
}


//
function missingValue1(arr){
  count = 0;
  sum = 0;

  for (i = 0; i < arr.length; i ++){
      sum += arr[i]
  }
  console.log(sum)

  for (i = 0; i < arr.length; i ++){
      count += i
  }
  console.log(count)

  if (sum == count){
      return "Has all numbers."
  } else {
      return "Missing a number."
  }
}}




/*
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
  NO SORT ALLOWED
*/
function missingValue(arr){

}







function missingValue(arr){
    for(var i = 0; i < arr.length-1; i++){
        for (var j = 0; j < arr.length-1-i; j++){
            if (arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr);
    for (var x = 0; x < arr.length-1; x++){
        if (arr[x] - arr[x-1] !== 1 ){
        return true;
        } else {
        return false;
        }
    }
}


//
function missingValue1(arr){
  count = 0;
  sum = 0;

  for (i = 0; i < arr.length; i ++){
      sum += arr[i]
  }
  console.log(sum)

  for (i = 0; i < arr.length; i ++){
      count += i
  }
  console.log(count)

  if (sum == count){
      return "Has all numbers."
  } else {
      return "Missing a number."
  }
}}




/*
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
  NO SORT ALLOWED
*/
function missingValue(arr){

}







function missingValue(arr){
    for(var i = 0; i < arr.length-1; i++){
        for (var j = 0; j < arr.length-1-i; j++){
            if (arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr);
    for (var x = 0; x < arr.length-1; x++){
        if (arr[x] - arr[x-1] !== 1 ){
        return true;
        } else {
        return false;
        }
    }
}


//
function missingValue1(arr){
  count = 0;
  sum = 0;

  for (i = 0; i < arr.length; i ++){
      sum += arr[i]
  }
  console.log(sum)

  for (i = 0; i < arr.length; i ++){
      count += i
  }
  console.log(count)

  if (sum == count){
      return "Has all numbers."
  } else {
      return "Missing a number."
  }
}}




/*
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
  NO SORT ALLOWED
*/
function missingValue(arr){

}







function missingValue(arr){
    for(var i = 0; i < arr.length-1; i++){
        for (var j = 0; j < arr.length-1-i; j++){
            if (arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr);
    for (var x = 0; x < arr.length-1; x++){
        if (arr[x] - arr[x-1] !== 1 ){
        return true;
        } else {
        return false;
        }
    }
}


//
function missingValue1(arr){
  count = 0;
  sum = 0;

  for (i = 0; i < arr.length; i ++){
      sum += arr[i]
  }
  console.log(sum)

  for (i = 0; i < arr.length; i ++){
      count += i
  }
  console.log(count)

  if (sum == count){
      return "Has all numbers."
  } else {
      return "Missing a number."
  }
}}




/*
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
  NO SORT ALLOWED
*/
function missingValue(arr){

}







function missingValue(arr){
    for(var i = 0; i < arr.length-1; i++){
        for (var j = 0; j < arr.length-1-i; j++){
            if (arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr);
    for (var x = 0; x < arr.length-1; x++){
        if (arr[x] - arr[x-1] !== 1 ){
        return true;
        } else {
        return false;
        }
    }
}


//
function missingValue1(arr){
  count = 0;
  sum = 0;

  for (i = 0; i < arr.length; i ++){
      sum += arr[i]
  }
  console.log(sum)

  for (i = 0; i < arr.length; i ++){
      count += i
  }
  console.log(count)

  if (sum == count){
      return "Has all numbers."
  } else {
      return "Missing a number."
  }
}