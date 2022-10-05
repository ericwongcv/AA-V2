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
    let [a, b] = [nums1, nums2];
    const total = a.length + b.length;
    const half = Math.floor(total / 2);

    if (b.length < a.length) [a, b] = [b, a];

    let [l, r] = [0, a.length - 1];
    
    while (true) {
        let i = Math.floor((l + r) / 2);    // a
        let j = half - i - 2;               // b

        const aLeft = i >= 0 ? a[i] : -Infinity;
        const aRight = i + 1 < a.length ? a[i + 1] : Infinity;
        const bLeft = j >= 0 ? b[j] : -Infinity;
        const bRight = j + 1 < b.length ? b[j + 1] : Infinity;

        if (aLeft <= bRight && bLeft <= aRight) {
            if (total % 2 !== 0)
                return Math.min(aRight, bRight);
            else
                return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
        } else if (aLeft > bRight) {
            r = i - 1;
        } else {
            l = i + 1;
        }
    }
};

let [nums1, nums2] = [[1,3],[2]];
console.log(findMedianSortedArrays(nums1, nums2));      // 2.00000

[nums1, nums2] = [[1,2],[3,4]];
console.log(findMedianSortedArrays(nums1, nums2));      // 2.5
