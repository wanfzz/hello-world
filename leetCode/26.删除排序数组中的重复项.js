var removeDuplicates = function(nums) {
  console.log(nums)
  for (let i=1; i<nums.length;i++) {
     let item = nums[i];
     let prev = nums[i-1];
     if (item === prev) {
       nums.splice(i, 1);
       i--;
     }
  }
  console.log(nums)
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4]);