function recursiveSigma(n){
    if(n === 1 ){
        return 1
    }
    return n + recursiveSigma(n - 1)
}


function sumArr(nums, i = 0) {
    if (i === nums.length) {
      return 0;
    }
    return nums[i] + sumArr(nums, i + 1);
}

function binarySearch(arr, target){
    if(arr.length == 1){
        return (arr[0] == target) ? true : false;
    }
    var mid = Math.floor((arr.length) / 2)
    if(target == arr[mid]){
        return true
    }
    if(target < arr[mid]){
        return binarySearch(arr.slice(0, mid), target)
    }
    else{
        return binarySearch(arr.slice(mid, arr.length), target)
    }
}


function rLCM(a, b, am = a, bm = b) {
    if (am === bm) {
      return am;
    }
  
    if (am < bm) {
      return rLCM(a, b, am + a, bm);
    }
  
    if (bm < am) {
      return rLCM(a, b, am, bm + b);
    }
  }