// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

const findMedianSortedArrays = (nums1, nums2) => {
    const nums1LastIdx = nums1.length - 1;
    const nums2LastIdx = nums2.length - 1;

    const even = (nums1.length + nums2.length) % 2 === 0;
    const midIdx = Math.floor((nums1.length + nums2.length - 1) / 2);

    if (nums1[nums1LastIdx] < nums2[0]) {
        midVal = getNumsFromIdx(midIdx, nums1, nums2);
        midNextVal = getNumsFromIdx(midIdx + 1, nums1, nums2);
        return even ? (midVal + midNextVal) / 2 : midVal;
    } else if (nums2[nums2LastIdx] < nums1[0]) {
        midVal = getNumsFromIdx(midIdx, nums2, nums1);
        midNextVal = getNumsFromIdx(midIdx + 1, nums2, nums1);
        return even ? (midVal + midNextVal) / 2 : midVal;
    }
};

const getNumsFromIdx = (idx, nums1, nums2) => {
    if (idx > nums1.length + nums2.length) return false;
    if (idx < nums1.length)
        return nums1[idx];
    else
        return nums2[idx - nums1.length];
}

// let [nums1, nums2] = [[1,3],[2]];
// console.log(findMedianSortedArrays(nums1, nums2));      // 2.00000

[nums1, nums2] = [[1,2],[3,4]];
console.log(findMedianSortedArrays(nums1, nums2));      // 2.5
