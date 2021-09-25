const arr  =  [20, 6, 39, 33, 12, 70, 1];

bubbleSort(arr)

function bubbleSort(arr) {
    for (let  n= 0; n < arr.length; n++) {  
    
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const min = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = min;
                
        }
    }
}  
    console.log(arr)
}

let search = function (nums, target) {
    let left = 0;
    let right = arr.length - 1;
    let mid;

    while (left <= right){
        mid = Math.round( (right - left)/2 + left);


        if (target === nums[mid]) {
            return mid;            
        } else if (target < nums[mid]){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
}

console.log(search(arr, 70));

//

var arr1 = [1,2,3,4,5,6,7,8];
var arr2 = [];
var j=0;

for(i=arr1.length - 1; i>=0; i--){
    arr2[j]=arr1[i];
    j++;
    
}
 console.log(arr2);