class Solution:
    def maxArea(self, height: List[int]) -> int:
        low, high = 0, len(height) - 1
        max_water = 0

        while low < high:
            length = high - low
            min_height = min(height[low], height[high])
            current_area = length * min_height
            max_water = max(max_water, current_area)

            # Move the pointer with the smaller height
            if height[low] < height[high]:
                low += 1
            else:
                high -= 1

        return max_water
