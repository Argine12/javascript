// function foo() {
//     return new Promise(function(resolve, reject) {
      
//         resolve(20)
    
//     });
// };

// foo().then(data => {

//     return data + 10;

// }).then(data => {

//     return data + 5;

// }).then(data => {
//     console.log(data);
// })








// function foo1() {
//     return new Promise( function(resolve, reject) {
//         resolve(27);
//     })
// }

// function foo2(arg) {
//     return new Promise( function(resolve, reject){
//         resolve( arg + 10);
//     })
// }


// foo1().then(data => {
    
//     return foo2(data)

// }).then(data => {

//     console.log(data);

// })






// function foo(arg) {
//     return new Promise( function (resolve, reject){
//         if(arg > 10){
//             resolve(arg);
//         }else{
//             reject("Something went wrong");
//         };
//     });

// };


// foo(3).then(data => {
   
//     console.log(data);

// }).catch(error => {
   
//     console.log(error);

// });







// function foo(arg) {
    
//     return new Promise( function(resolve, reject) {
//         if(arg < 15){
           
//             resolve(arg);
        
//         }else{

//             reject("Something went wrong");
        
//         };
//     });
// };


// foo(2).then( data => {

//     return data + 1;

// }).then( data => {

//     return data + 10;

// }).then( data => {

//     return data - 1;

// }).then( data => {
     
//     console.log(data);

// }).catch( error => {

//     console.log(error);
// });


