// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Asynchronous task completed');
//         resolve();
//     }, 1000);
// });
////another with function
// const promiseOne = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         console.log('Asynchronous task completed');
//         resolve
        
//     },1000)
// });

// promiseOne.then(() => {
//     console.log('Promise resolved');
// });



//// short method for promise

// new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         console.log('Asynchronous task completed1');
//         resolve();        
//     },1000)
// }).then(function(){
//     console.log('Promise resolved1');
    
// })


// const promiseThree = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         console.log('Asynchronous task completed3');
//         resolve({unsename: 'deva', password: '1234'});
        
//     },1000)
// }).then(function(user){
//     console.log('Promise resolved3');
//     console.log(user);
        
// })


// const promiseFour = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         let error =true
//         if(!error){
//             console.log('Asynchronous task completed4');
//             resolve({unsename: 'deva', password: '1234'});
//         }else{
//             reject('Error: Something went wrong');
//         }
        
//     },1000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.name;
    
// }).then((name)=>{
//     console.log(name);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log('Task completed');
    
// })


// const promiseFive = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         let error =false//trrue
//         if(!error){
//             console.log('Asynchronous task completed4');
//             resolve({unsename: 'javasript', password: '1234'});
//         }else{
//             reject('Error: Something went wrong with js');
//         }
        
//     },1000)
// })

// async function consumePromiseFive(){
//    try{
//     const respose = await promiseFive
//     console.log(respose);
//    }
//     catch(error){
//          console.log(error);
//     }
        
// }
// consumePromiseFive();


// async function allUser(){
//     try{
//         const responece = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await responece.json();
//         //for see the use the log=> console.log(data);

//     }catch(error){
//         console.log(error);
//     }
// }


fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));