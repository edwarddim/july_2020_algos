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