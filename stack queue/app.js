//stack

let arr = [];
function stack(myArr, action, elem){
    if (elem === 'undefined' || action === 'get'){
      if(myArr.length === 0){
        return 'empty stack';
      } else
      return myArr.pop();
    }
    if(action === 'set' && elem !== 'undefined'){
      myArr.push(elem);
      return myArr;
    }
}
  console.log(stack(arr, 'set', 1));
  console.log(stack(arr, 'set', 5));
  console.log(stack(arr, 'set', 9));
  console.log(stack(arr, 'set', 13));
  console.log(stack(arr, 'get'));
  console.log(stack(arr, 'get'));
  console.log(stack(arr, 'get'));
  console.log(arr);

//queue

let arr1 = [];

function queue(myArr, action, elem){
  if(action === 'set' && elem !== 'undefined'){
    
    myArr.push(elem);
    return myArr;
  };

  if( action === 'get') {
    if(myArr.length === 0){
      
      return 'arr is empty'
    
    }else{

    return  myArr.shift();
    
    };
  };
};


console.log(queue(arr1, 'set', 1));
console.log(queue(arr1, 'set', 2));
console.log(queue(arr1, 'set', 3));
console.log(queue(arr1, 'get'));
console.log(queue(arr1, 'get'));
console.log(arr1);