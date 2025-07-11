# problem -> Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
# inputs, [3,0,1], [0,1], [9,6,4,2,3,5,7,0,1]

# solution: Uisng cyclist sort, worst  rubntime case is O(n*2)

class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        i = 0
        n = len(nums)
        while i < n:
            current_num = nums[i]

            if current_num < n and current_num != i:
                nums[i], nums[current_num] = nums[current_num], nums[i]
            else:
                i += 1

        for i in range(n):
            if i != nums[i]:
                return i
        return n
