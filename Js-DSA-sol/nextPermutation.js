var nextPermutation = function (nums) {
  //so our goal is to find the. next permutation of nums
  // we can do this by building every permutation of nums by
  //soring nums and building the permutation from the first lowest to
  //the highest, then look for the permutation where tjh index they
  //first differ is greater than.
  //But that is the brute forcd method.

  // optimized method is
  //first we find the pivot
  //the pivot is the first digit from the right that is smaller
  //Than the one after it.

  function findPivot() {
    //Two pointer to the rescue here
    let point1 = nums.length - 1;
    let point2 = nums.length - 2;
    while (point2 >= 0) {
      if (nums[point2] < nums[point1]) {
        return point2;
      }
      point1--;
      point2--;
    }

    //if the code gets to this place;
    //means there is no greater order than the current;
    nums.sort((a, b) => a - b);
    return -1;
  }

  //next step is from the right of the pivot
  // find the smallest digit greater than the pivot
  //And swap them
  function findSmallestGreaterThanPivotToRight(pivot) {
    let minIndex = -1;

    for (let i = pivot + 1; i < nums.length; i++) {
      if (nums[i] > nums[pivot]) {
        if (minIndex === -1 || nums[i] < nums[minIndex]) {
          minIndex = i;
        }
      }
    }

    if (minIndex !== -1) {
      [nums[pivot], nums[minIndex]] = [nums[minIndex], nums[pivot]];
    }
  }

  let pivot = findPivot();
  if (pivot < 0) {
    return;
  }
  //And swap them
  findSmallestGreaterThanPivotToRight(pivot);

  // now is to sort the right side of the pivot;
  let rightSide = nums.splice(pivot + 1);
  rightSide.sort((a, b) => a - b);
  nums.push(...rightSide);
};
