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