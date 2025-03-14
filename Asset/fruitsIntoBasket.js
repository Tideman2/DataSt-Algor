// You are visiting a farm that has a single row of fruit trees arranged from left to right.
//  The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

// You only have two baskets, and each basket can only hold a single type of fruit.
//  There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right.
//  The picked fruits must fit in one of your baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.

// solution

var totalFruit = function (fruits) {
  let fruitTypeInWindow = new Map();
  let count = 0;
  let left = 0;
  let maxCount = 0;
  for (let i = 0; i < fruits.length; i++) {
    // Add current fruit to the window before anything else
    fruitTypeInWindow.set(
      fruits[i],
      (fruitTypeInWindow.get(fruits[i]) || 0) + 1
    );

    //check if type of fruit in window is lesser and increment
    if (fruitTypeInWindow.size <= 2) {
      count += 1;
      if (count >= maxCount) {
        maxCount = count;
      }
    } else {
      while (fruitTypeInWindow.size > 2) {
        count -= 1;
        let typeCount = fruitTypeInWindow.get(fruits[left]);
        typeCount -= 1;
        fruitTypeInWindow.set(fruits[left], typeCount);
        if (typeCount === 0) {
          fruitTypeInWindow.delete(fruits[left]);
        }
        left++;
      }
      //we increment count here because we never got a chnce to because the window type was more than 2
      //and forLoop is going ahead without running again for current tree
      count += 1;
    }
  }

  return maxCount;
};
