function mergeSort(arr){ //O(logn)
    if ( arr.length < 2) return arr;

    const middleIndex = Math.floor(arr.length / 2);
    const leftArray = arr.slice(0, middleIndex);
    const rightArray = arr.slice(middleIndex, arr.length);

    return merge(mergeSort(leftArray), mergeSort(rightArray)); //O(n)
}

//O(n log n)

let merge = function(leftArray, rightArray){
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length){
        if ( leftArray[leftIndex] < rightArray[rightIndex]){
            resultArray.push(leftArray[leftIndex])
            leftIndex += 1
        } else{
            resultArray.push(rightArray[rightIndex])
            rightIndex += 1
        }
    }
    return resultArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
}


let arr = [3,12,16,1,6,15];
console.log(mergeSort(arr));
