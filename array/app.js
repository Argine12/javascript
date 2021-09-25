//matrix

/*const matrix = [[1, 2, 3], [10, 20, 30], [100, 200, 300]];
for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[i].length; ++j) {
        console.log(matrix[i][j]);
    }
}*/

//includes

/*const arr = [10, 20, 0, 40, 50];
function inc(arr, elem) {
    for (let i = 0; i < arr.length; i++) {
        if( arr[i] == 40){
            return true;
        }else{
            return false;
        }
        
    }
}

console.log(inc(arr, 40));*/

//concate

/*const arr = [10, 20, 0, 40, 50];
const arr1 = [50, 60, 70, 80];

function concate(arr, arr1) {
    const newArr = [];

    for (let i = 0; i < arr.length; ++i) {
        newArr.push(arr[i]);
    }
    for (let j = 0; j < arr1.length; ++j ){
        newArr.push(arr1[j]);
        
    }

    return newArr;
}

console.log(concate(arr, arr1));*/

//find index

const arr = [10, 20, 30, 40, 50];

function findindex(arr, elem, action) {
   
    for (let i = 0; i < arr.length; ++i) {
        if(action == ">" && arr[i] > elem){
            return i;
        }else if(action == "<" && arr[i] < elem){
            return i;
        }
    }
    return -1;
}

console.log(findindex(arr, elem, action));
