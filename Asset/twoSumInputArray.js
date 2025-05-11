// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.
// Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution. You may not use the same element twice.
// Your solution must use only constant extra space.

let numbers = [2, 7, 11, 15];
let target = 9;
var twoSum = function (numbers, target) {
  //Brute forced method using a while loop
  // while(pointer1 < numbers.length - 1) {
  //  //We get the result of target - 1pointer
  //  let remainder = target - numbers[pointer1]
  //  //use i to checck remaining items in numbers if
  //  //They are equals to remainder
  //   for(let i = pointer1 + 1; i < numbers.length; i++) {
  //    if(numbers[i] === remainder) {
  //     return [pointer1 + 1, i + 1]
  //    }
  //   }
  //   pointer1 += 1
  // }

  //optimized solution using the attribute of the array of numbers being sorted in acending order
  // using 2 pointers technique
  let pointer1 = 0;
  let pointer2 = numbers.length - 1;
  while (pointer1 < pointer2) {
    // get the sum of numbers at each point
    let sum = numbers[pointer1] + numbers[pointer2];
    //if the sum is equal to target return the pointers with 1indexed
    if (sum === target) {
      return [pointer1 + 1, pointer2 + 1];
    } else if (sum > target) {
      // if sum is greater take right pointer 1 step backward and repeat
      pointer2 -= 1;
    } else {
      //if sum is lesser take left 1 step forward
      pointer1 += 1;
    }
  }
};
