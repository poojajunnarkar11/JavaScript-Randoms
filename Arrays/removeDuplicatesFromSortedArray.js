/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length == 0) return 0
  let uniqueCount = 0, uniqueElement = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (uniqueElement != nums[i]) {
      uniqueCount++
      uniqueElement = nums[i]
    }
  }
  return uniqueCount + 1
}
//console.log(removeDuplicates([1, 1, 1, 4, 4, 5, 5, 5, 6, 7, 8, 8, 8]))
console.log(removeDuplicates([]))
