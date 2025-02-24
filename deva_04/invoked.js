////******this the Immediately Invoked Function Expression(IIFE) */
// function deva(){
//     console.log("db connected");
    
// }()this produce error

(function deva(){
    console.log("db connected");
    
})();//this will run => db connected alway give semicolon


(()=>{
    console.log("deva");
    
})()