/*  javasript global variable in browser is the window
three types of context
1) Global Execution context
2) Function Execution context
3)Eval Execution context=>this depend upon you is extra \

code execution in two step 1)memory creation phase 2)Execution phase 
js is the single threded*/

let var1 = 12;
let var2 = 10;
function addnum(num1,num2){
    return num1+num2;
}
let result1 = addnum(var1,var2);
let result2 = addnum(10.5)

/*1) global execution  first code locate in this
2) memory location take all varible give undefined
 var1=> undefined
 var2=>undefined
 addnum=>definatio
 result */