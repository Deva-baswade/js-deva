//this the function file

function myfunct(){
    console.log("d");
    console.log("e");
    console.log("v");
    console.log("a");
    console.log("n");
    console.log("a");
    console.log("n");
    console.log("d");
}
myfunct();

function defmy(num1,num2){//the num1 and the num2 is the parameter
    console.log(`the sum is : ${num1+num2}`);
    let result = num1+num2;
    return num1+num2;
    return num+num2
    
}
////when we give in th evariable like let result = defmy(12,16)=>undefined
defmy(12,16);//thie 12 and the 16 is the  argument
defmy()//this is give the NaN
defmy(3,a)//this give the 3a
defmy(3,null)//this is give the 3

function loginuser(username){
    return `${username} just logged in`
}
console.log(loginuser("devanand"))