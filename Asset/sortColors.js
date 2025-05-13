// Given an array nums with n objects colored red, white, or blue, sort them in-place
//  so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

var sortColors = function (nums) {
  // Brute forced solution
  // //to solve this problem we will use fast and slow pointer
  // //one constraint is to sort the flags in place
  // let slowPointer = 0;

  // //loop throgh nums
  // while(slowPointer < nums.length ) {
  // // use a for loop to move ahead slowPointer
  // //i is fastPointer
  //  for(let i = slowPointer +1; i < nums.length; i++) {
  //     //check if the nums fastPointer is going to run throuh
  //     //is < currentNum, if true swap them
  //      if(nums[i] < nums[slowPointer]) {
  //        let prevCurrentNum = nums[slowPointer]
  //        nums[slowPointer] = nums[i];
  //        nums[i] = prevCurrentNum;
  //        console.log(nums[slowPointer], nums[i])
  //      }
  //  }
  //  console.log(nums);
  // slowPointer += 1;
  // }

  // optimized solution
  //will be using 3 pointer approach
  //Also called the dutch flag algorithm   jh
  // where there is a left pointer that starts at the outmost left 0
  //there is a right poointer that starts at outmost right
  //last pointer to check the each
  //we init three pointers to act as
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    //if mid which will act as current number to check is == 0
    //we want to swap it and the current position of low
    //then move both 1 steps
    if (nums[mid] == 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] == 1) {
      mid++;
    } else {
      //if nums[mid] == 2, swap with high and move high one step
      //to the left alone because we still need to check the new
      //swapped in the position of mid
      [nums[high], nums[mid]] = [nums[mid], nums[high]];
      console.log(nums[mid], nums[high]);
      high -= 1;
    }
  }
};
