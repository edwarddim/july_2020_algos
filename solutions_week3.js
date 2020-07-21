function balancePoint(nums) {
    const length = nums.length;
  
    if (length < 2) {
      return false;
    }
  
    let left = nums[0];
    let right = 0;
  
    for (let i = 1; i < length; i++) {
      right += nums[i];
    }
  
    for (let i = 1; i < length; i++) {
        if (left === right) {
            return true;
        }
  
        right -= nums[i];
        left += nums[i];
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