/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var pancakeSort = function(arr) {
    let dupArr = arr.slice(0);    
    
    let kArray = [];
    let endValue = dupArr.length;
    
    arr.sort();
    let sorted = arr.every( (el, i) => el === dupArr[i]);
    if (sorted) return kArray;
    
    while (endValue > 1) {
        
        const k = returnMaxIndex(dupArr.slice(0, endValue)) + 1;          
        kArray.push(k);
        
        let subarray = dupArr.slice(0, k);
        
        replace(dupArr, subarray.reverse());
        
        let sortSub = dupArr.slice(0, endValue);
        kArray.push(sortSub.length);
        
        replace(dupArr, sortSub.reverse());

        endValue--;
    }

    function replace(arr1, arr2) {
        arr2.forEach( (_, i) => {
            arr1[i] = arr2[i];
        })
    }

    function returnMaxIndex(arr) {
        let max = arr[0];
        let index = 0;
         for ( let i = 0; i < arr.length; i++) {
             if(arr[i] > max) {
                 max = arr[i];
                 index = i;
             }
         }
        
        return index;
    }
    
    return kArray;
};

let arr = [1,3,2,4,2];

console.log(pancakeSort(arr));
